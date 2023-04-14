import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title, description, category);
        onClose();
    };

    if (!isOpen) return null;

    return (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <button onClick={onClose} className="float-right text-gray-500">
                    &times;
                </button>
                <h2 className="text-xl mb-4">Add News</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a category</option>
                            <option value="General">General</option>
                            <option value="Business">Business</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Health">Health</option>
                            <option value="Science">Science</option>
                            <option value="Sports">Sports</option>
                            <option value="Technology">Technology</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};

export const NewsComponent = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNewsItem = (title, description, category) => {
        setNewsItems([...newsItems, { title, description, category }]);
    };

    return (
        <div className="mt-12">
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block mb-4"
                style={{ paddingTop: "1rem" }}
            >
                Add News
            </button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addNewsItem}
            />
            <div className="flex flex-wrap">
                {newsItems.map((item, index) => (
                    <div key={index} className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <p className="text-red-500">{item.category}</p>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};
