import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedProjects from '@/components/SelectedProjects';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <main className='container mx-auto flex min-h-screen flex-col px-4 py-[calc(5rem)] md:px-6'>
                <Hero />
                <About />
                <hr className='mt-4' />
                <SelectedProjects />
                <hr className='mb-4 mt-6' />
                <Footer />
            </main>
        </>
    );
}
