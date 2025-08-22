import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [author, setAutor] = useState('');
  const [category, setCategory] = useState('');
  const [isPublished, setIsPublished] = useState();

  const generateContent = async () => {
    // You can use AI API here if needed.
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const content = quillRef.current.root.innerHTML;
    console.log({
      title,
      subTitle,
      category,
      content,
      image,
    });
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      const toolbarOptions = [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'], // enable image upload
        ['clean'],
      ];

      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: imageHandler,
            },
          },
        },
      });
    }
  }, []);

  // 👇 Image Handler Function
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const range = quillRef.current.getSelection();
        quillRef.current.insertEmbed(range.index, 'image', reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-black text-gray-100 h-full overflow-scroll"
    >
      <div className="bg-black w-full max-w-3xl p-4 mp:p-10 sm:m-10 border border-1 border-gray-400 rounded-lg">
        <p className="font-semibold text-gray-200">Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4 font-semibold text-gray-200">News Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4 font-semibold text-gray-200">SubTitle</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />
        <p className="mt-4 font-semibold text-gray-200">Author</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setAutor(e.target.value)}
          value={author}
        />

        <p className="mt-4 font-semibold text-gray-200">News Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
          <button className="border border-2 border-transparent text-xs absolute bottom-1 right-2 ml-2 text-white bg-[#5044e5] px-4 py-1.5 rounded hover:bg-transparent hover:border-[#5044e5] transition-all cursor-pointer" type="button" onClick={generateContent}>Generate with AI</button>
        </div>

        <p className="mt-4 font-semibold text-white">News Category</p>
        <select onChange={e => setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border text-white border-gray-200 outline-none rounded'>
          {blogCategories.map((item, index)=>{
            return <option className='text-black' key={index} value={item}>{item}</option>
          })}
        </select>

        <div className='flex gap-2 mt-4 items-center'>
          <p className='text-white font-bold text-lg'>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublished(e.target.checked)}/>
        </div>

        <button type='submit' className='mt-8 w-40 bg-[#5044e5] text-white font-semibold rounded cursor-pointer text-lg'>Publish</button>

      

        {/* <button type="submit" className="mt-6 bg-[#5044e5] text-white px-6 py-2 rounded hover:bg-transparent hover:border hover:border-[#5044e5] transition-all">Publish News</button> */}
      </div>

    </form>
  );
};

export default AddBlog;
