import { useEffect, useState } from 'react';
import { BiChevronsRight, BiTrash } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  deleteImage,
  setProduct,
  setProducts,
  updateProduct,
} from '../slices/productSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, laodingImage } = useSelector((store) => store.products);
  const product = useSelector((store) => store.products.product);
  const {
    name,
    brand,
    price,
    discount,
    description,
    image,
    product_images,
    product_features,
  } = useSelector((store) => store?.products?.product);
  const token = useSelector((store) => store.auth.userInfo.token);

  const [productName, setProductName] = useState(name);
  //   const [category, setCategory] = useState('');
  const [productBrand, setProductBrand] = useState(brand);
  const [productPrice, setProductPrice] = useState(price);
  const [productDiscount, setProductDiscount] = useState(discount);
  const [feature, setFeature] = useState('');
  const [productFeatures, setProductFeatures] = useState(product_features);
  const [productdesc, setProductDesc] = useState(description);
  const [img, setImg] = useState(image);
  const [productImages, setProductImages] = useState(product_images);
  const [loadingImgs, setLoadingImgs] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    dispatch(setProduct(id));
  }, [dispatch, id]);
  console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const productObj = {
      name: productName || name,
      product_category_id: 1,
      brand: productBrand || brand,
      price: Number(productPrice) || Number(price),
      discount: Number(productDiscount) || Number(discount),
      video_url: 'hello',
      image: img || image,
      product_images: productImages || product_images,
      // features: productFeatures || product_features,
      description: productdesc || description,
    };
    dispatch(updateProduct(id, productObj, token));
    dispatch(setProducts());
    setProductName('');
    setProductBrand('');
    setProductPrice('');
    setProductDiscount('');
    setProductImages('');
    setImg('');
    setProductDesc('');
    navigate('/admin/products');
  };

  const handleFile = (e) => {
    setLoadingImg(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'iamfortunate');
    fetch('  https://api.cloudinary.com/v1_1/dk2kchb50/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImg(data.url);
        setLoadingImg(false);
      })
      .catch((err) => console.log(err));
  };

  const uploadCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'iamfortunate');
    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/dk2kchb50/image/upload',
      formData
    );
    return data?.secure_url;
  };

  const handleFiles = async (e) => {
    setLoadingImgs(true);
    try {
      const files = e.target.files;
      let arr = [];
      for (let i = 0; i < files.length; i++) {
        const data = await uploadCloudinary(files[i]);
        arr.push(data);
      }
      setProductImages(arr);
      console.log(productImages);
      setLoadingImgs(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full px-6 py-6 bg-[#F1F5F9]'>
      <div className='flex justify-between items-end flex-wrap mb-10'>
        <div className=''>
          <h3 className='mb-1 text-[26px] font-Heebo500'>Edit Product</h3>
          <ul className='text-xs font-Heebo500 flex items-center space-x-1.5'>
            <li className='breadcrumb-item text-muted'>Products</li>
            <li className='breadcrumb-item flex items-center'>
              <BiChevronsRight />
            </li>
            <li className='breadcrumb-item text-muted'>Edit Product</li>
          </ul>
        </div>
      </div>

      <div className='padX py-6 rounded-lg space-y-6 bg-white'>
        {loading ? (
          <div className=' w-full py-20 flex items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <form>
            <div className='grid grid-cols-9 gap-6'>
              <div className='inputWrapper'>
                <label htmlFor='name' className='requiredLabel'>
                  Product Name
                </label>
                <input
                  required
                  id='name'
                  type='text'
                  defaultValue={name}
                  onChange={(e) => setProductName(e.target.value)}
                  className='input'
                  placeholder='Apple Imac 27”'
                />
              </div>
              <div className='inputWrapper'>
                <label htmlFor='brand' className='requiredLabel'>
                  Brand
                </label>
                <input
                  required
                  id='brand'
                  type='text'
                  defaultValue={brand}
                  onChange={(e) => setProductBrand(e.target.value)}
                  className='input'
                  placeholder='Apple'
                />
              </div>
              <div className='inputWrapper'>
                <label htmlFor='basePrice' className='requiredLabel'>
                  Base Price
                </label>
                <input
                  required
                  type='number'
                  defaultValue={price}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  className='input'
                  placeholder='₦2300'
                />
              </div>
              <div className='inputWrapper'>
                <label htmlFor='discountAmount' className='label'>
                  Discount Amount
                </label>
                <input
                  type='number'
                  id='discountAmount'
                  defaultValue={discount}
                  onChange={(e) => setProductDiscount(Number(e.target.value))}
                  className='input'
                  placeholder='₦2300'
                />
              </div>
              <div className='inputWrapper'>
                <div className='flex items-center gap-x-6'>
                  <label htmlFor='name' className='requiredLabel'>
                    Product Images
                  </label>
                </div>
                {loadingImgs ? (
                  <div className='pt-3 pl-6'>
                    <ClipLoader color='#76A53F' size={30} />
                  </div>
                ) : (
                  <>
                    <input
                      type='file'
                      name='images'
                      onChange={handleFiles}
                      multiple
                      className='text-sm'
                    />
                    <div className='flex flex-wrap items-center gap-x-2 gap-y-2 mt-3'>
                      {laodingImage ? (
                        <div>please wait</div>
                      ) : (
                        product_images &&
                        !productImages &&
                        product_images.map((img, i) => (
                          <div className='relative' key={i}>
                            <img
                              src={img.image_url}
                              alt=''
                              className='w-16 h-16 object-cover object-top'
                            />
                            <div className='bg-red p-1 rounded-full w-fit absolute right-1 top-2 cursor-pointer'>
                              <BiTrash
                                onClick={() => {
                                  dispatch(deleteImage(img.id, token));
                                }}
                                className='text-white text-sm'
                              />
                            </div>
                          </div>
                        ))
                      )}
                      {productImages &&
                        productImages.map((img, i) => (
                          <div className='relative' key={i}>
                            <img
                              src={img}
                              alt=''
                              className='w-16 h-16 object-cover object-top'
                            />
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
              <div className='inputWrapper'>
                <label htmlFor='name' className='requiredLabel'>
                  Featured Image
                </label>
                {loadingImg ? (
                  <div className='pt-3 pl-6'>
                    <ClipLoader color='#76A53F' size={30} />
                  </div>
                ) : (
                  <>
                    <input
                      type='file'
                      name='image'
                      onChange={handleFile}
                      className='text-sm'
                    />
                    {image && (
                      <div className='flex flex-wrap items-center gap-x-2 gap-y-2 mt-3'>
                        <img
                          src={img || image}
                          alt=''
                          className='w-16 h-16 object-cover object-top'
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className='inputWrapper'>
                <label htmlFor='features' className='requiredLabel'>
                  Features
                </label>
                {product.product_features &&
                  product.product_features.length > 0 && (
                    <div className='pt-1 pb-3 flex flex-wrap items-center gap-2'>
                      {product.product_features &&
                        product.product_features.map((ft) => (
                          <div
                            key={ft.id}
                            className='text-xs flex items-center gap-x-1 font-Heebo600 bg-[#F1F5F9] w-fit py-1.5 px-2'
                          >
                            <span>{ft.feature}</span>
                            <div
                              onClick={() => {
                                const filteredArr =
                                  product.product_features.filter(
                                    (feat) => feat.id !== ft.id
                                  );
                                setProductFeatures(filteredArr);
                              }}
                            >
                              <FaTimes className='cursor-pointer' />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                <div className='relative flex items-center'>
                  <input
                    type='text'
                    id='features'
                    value={feature}
                    onChange={(e) => setFeature(e.target.value)}
                    className='input'
                    placeholder='Full keyboard light'
                  />
                  <div
                    onClick={() => {
                      feature && productFeatures.push(feature);
                      setFeature('');
                    }}
                    className='absolute right-0 top-0 bottom-0 py-2.5 px-4 bg-green text-white rounded-tr-lg rounded-br-lg cursor-pointer flex items-center justify-center'
                  >
                    <FaPlus className='text-lg' />
                  </div>
                </div>
              </div>
              <div className='col-span-6'>
                <label htmlFor='product-details' className='requiredLabel'>
                  Product Details
                </label>
                <textarea
                  id='product-details'
                  rows='10'
                  defaultValue={description}
                  onChange={(e) => setProductDesc(e.target.value)}
                  className='input p-4 resize-none'
                  placeholder='e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz'
                ></textarea>
              </div>
            </div>
            <button
              onClick={handleUpdate}
              className='mt-10 text-white bg-green font-Heebo500 rounded-lg w-[25%] py-4 text-center'
            >
              Update product
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default EditProduct;
