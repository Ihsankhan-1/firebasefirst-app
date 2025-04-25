import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../components/loader/Loader';
import { auth } from '../../firebase/FirebaseConfig';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const context = useContext(myContext)
    const { loading,setLoading} = context

    const signin = async () => {
      setLoading(true);
      try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('user',JSON.stringify(result));
        toast.success('Signin Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.href='/'
        setLoading(false);
      } catch (error) {
        toast.error('Sigin Failed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          error,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      }
    }
   
    return (
        <div className=' flex justify-center items-center h-screen bg-gray-700'>
            {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10  bordr hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={signin}
                        className=' bg-pink-600 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-pink-500  font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login