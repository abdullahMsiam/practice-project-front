import aboutImg from '../assets/about-us.jpg';
import aboutIm from '../assets/about.jpg';

const About = () => {
    return (
        <div>
            <div className=''>
                <img className='w-full mx-0 h-[500px]' src={aboutImg} alt="" />
            </div>

            <div className='flex flex-col items-center w-11/12 mx-auto'>
                <h1 className='text-6xl font-bold text-center'>About</h1>
                <p className='text-center text-2xl w-9/12 mt-24'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque repudiandae unde veritatis laboriosam assumenda vitae culpa totam. Quidem, consequatur.``</p>
            </div>

            <div className='flex gap-7 mt-8 w-11/12 mx-auto bg-gray-950 p-6 text-white'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia quod assumenda modi blanditiis ullam consequuntur est placeat obcaecati, laboriosam soluta itaque eveniet praesentium, quisquam dolorem ratione saepe dolore perspiciatis ab? Velit, illum officiis! Excepturi fugit nisi earum harum officia reiciendis repudiandae provident. Reiciendis quos consequatur neque dolores est facilis?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero non consequatur, soluta, hic similique odio repudiandae numquam excepturi alias pariatur esse, quaerat molestias in aliquid. Doloremque sequi fugit omnis esse placeat quisquam, delectus doloribus ad adipisci eum praesentium sapiente. Quisquam magnam repellat, odit non nesciunt facilis assumenda ipsa ullam corporis.</p>
            </div>

            <div className='flex justify-center'>
                <img className=' w-9/12 h-[400px]' src={aboutIm} alt="" />
            </div>

            <div className='grid grid-cols-3 gap-4 mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>#Our History</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus itaque ex, accusamus eveniet omnis architecto tenetur eligendi suscipit neque facere laudantium nihil earum, quam sapiente sunt expedita in. Quidem a hic laborum tempora, minima ad! Doloremque et quam doloribus iusto rem, unde assumenda voluptatem.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>#Achivement </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus itaque ex, accusamus eveniet omnis architecto tenetur eligendi suscipit neque facere laudantium nihil earum, quam sapiente sunt expedita in. Quidem a hic laborum tempora, minima ad! Doloremque et quam doloribus iusto rem, unde assumenda voluptatem.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>#Social Work</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus itaque ex, accusamus eveniet omnis architecto tenetur eligendi suscipit neque facere laudantium nihil earum, quam sapiente sunt expedita in. Quidem a hic laborum tempora, minima ad! Doloremque et quam doloribus iusto rem, unde assumenda voluptatem.</p>
                </div>

            </div>

        </div>
    );
};

export default About;




