import { supabase } from "../supabase/client";

interface IauthLogin {
    email: string;
    password: string;
}

interface IauthRegister {
    email: string;
    password: string;
    fullname: string;
    phone?: string;
}

export const signUp = async({
    email,
    password,
    fullname,
    phone
}: IauthRegister) => {
    // logic for sing up
    try {
        //registrar usuario o crear
        const {data, error} = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            throw new Error(error.message);
        }

        const userId = data.user?.id;

        if(!userId){
            throw new Error('User not found');
        }

        //autenticar usuario

        const {error: signInError} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (signInError) {
            console.log (signInError);
            throw new Error('Error signing in user');
        }

        //crear un rol por default

        const {error: roleError} = await supabase.from('user_roles').insert({
            user_id: userId,
            role: 'customer'
        });

        if (roleError) {
            console.log(roleError);
            throw new Error('Error creating user role');
        }

        //Insertar el usuario en la tabla de customers

        const {error: customerError} = await supabase.from('customers')
        .insert({
            user_id: userId,
            full_name: fullname,
            phone,
            email,
        });

        if (customerError){
            console.log(customerError);
            throw new Error('Error creating customer profile');
        }

        return data

        
    } catch (error) {
        console.log(error);
        throw new Error('Error in sign up');
}
     
};

// inicio de sesion

export const signIn = async ({email, password}: IauthLogin) => {
    
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(error){
        console.log(error);
        throw new Error('Error signing in');
    }

    return data;
};

//cerrar sesion

export const signOut = async () => {

    const {error} = await supabase.auth.signOut()

    if (error){
        console.log(error);
        throw new Error('Error signing out');
    }
};

export const getSession = async () => {
    const {data, error} = await supabase.auth.getSession();

    if (error){
        console.log(error);
        throw new Error('Error getting session');
    }

    return data;
};

export const getUserData = async (userId: string) => {
	const { data, error } = await supabase
		.from('customers')
		.select('*')
		.eq('user_id', userId)
		.single();

	if (error) {
		console.log(error);
		throw new Error('Error al obtener los datos del usuario');
	}

	return data;
};

//obtener rol de usuario

export const getUserRole = async (userId: string) => {
    const { data,  error} = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .single();

    if (error) {
        console.log(error);
        throw new Error('Error getting user role');
    }

    return data.role;

}