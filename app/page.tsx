import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
    
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-center md:text-5xl">
          FileFlexPlus
        </h1>
        <p className="text-center text-muted-foreground text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
          Introducing FileFlexPlus – your ultimate online solution for unlimited and free multimedia conversion. 
          Effortlessly convert images, audio, and videos with no restrictions. 
          Whether you’re working with media for personal or professional use, FileFlexPlus streamlines the process so you can focus on what matters most. 
          Start converting now and experience seamless, high-quality content transformation with ease!
        </p>
      </div>
      <Dropzone />
    </div>
  );
}
