import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    'address.addressLine1': Yup.string().required('Address line 1 is required'),
    'address.road': Yup.string().required('Road is required'),
  });
  
  // Initialize formik
  const formik = useFormik({
    initialValues: {
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      profile: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        road: '',
        linkAddress: '',
      },
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', values);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          formik.resetForm();
        }, 3000);
      }, 1000);
    },
  });
  
  // Helper to check if field has error
  const hasError = (fieldName) => 
    formik.touched[fieldName] && formik.errors[fieldName];
  
  // Helper for nested fields
  const hasNestedError = (parent, field) => 
    formik.touched[parent] && 
    formik.touched[parent][field] && 
    formik.errors[parent] && 
    formik.errors[parent][field];
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Create an Account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Join us to get access to exclusive features
            </p>
          </div>
          
          {submitSuccess && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Registration successful! Welcome aboard.
            </div>
          )}
          
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2 border-2 border-blue-500">
                {formik.values.profile ? (
                  <img 
                    src={formik.values.profile} 
                    alt="Profile Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Upload Photo
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        formik.setFieldValue('profile', reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }} 
                />
              </label>
            </div>
            
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    hasError('username') ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  {...formik.getFieldProps('username')}
                />
                {hasError('username') && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.username}</p>
                )}
              </div>
            </div>
            
            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  autoComplete="tel"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    hasError('phoneNumber') ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  {...formik.getFieldProps('phoneNumber')}
                />
                {hasError('phoneNumber') && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.phoneNumber}</p>
                )}
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    hasError('email') ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  {...formik.getFieldProps('email')}
                />
                {hasError('email') && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                )}
              </div>
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    hasError('password') ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  {...formik.getFieldProps('password')}
                />
                {hasError('password') && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
                )}
              </div>
            </div>
            
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    hasError('confirmPassword') ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  {...formik.getFieldProps('confirmPassword')}
                />
                {hasError('confirmPassword') && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.confirmPassword}</p>
                )}
              </div>
            </div>
            
            {/* Address Section */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Address Information</h3>
              
              <div className="space-y-4">
                {/* Address Line 1 */}
                <div>
                  <label htmlFor="address.addressLine1" className="block text-sm font-medium text-gray-700">
                    Address Line 1
                  </label>
                  <div className="mt-1">
                    <input
                      id="address.addressLine1"
                      name="address.addressLine1"
                      type="text"
                      className={`appearance-none block w-full px-3 py-2 border ${
                        formik.touched.address?.addressLine1 && formik.errors.address?.addressLine1 
                          ? 'border-red-300' 
                          : 'border-gray-300'
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      {...formik.getFieldProps('address.addressLine1')}
                    />
                    {formik.touched.address?.addressLine1 && formik.errors.address?.addressLine1 && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.address.addressLine1}</p>
                    )}
                  </div>
                </div>
                
                {/* Address Line 2 */}
                <div>
                  <label htmlFor="address.addressLine2" className="block text-sm font-medium text-gray-700">
                    Address Line 2 (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      id="address.addressLine2"
                      name="address.addressLine2"
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      {...formik.getFieldProps('address.addressLine2')}
                    />
                  </div>
                </div>
                
                {/* Road */}
                <div>
                  <label htmlFor="address.road" className="block text-sm font-medium text-gray-700">
                    Road
                  </label>
                  <div className="mt-1">
                    <input
                      id="address.road"
                      name="address.road"
                      type="text"
                      className={`appearance-none block w-full px-3 py-2 border ${
                        formik.touched.address?.road && formik.errors.address?.road 
                          ? 'border-red-300' 
                          : 'border-gray-300'
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      {...formik.getFieldProps('address.road')}
                    />
                    {formik.touched.address?.road && formik.errors.address?.road && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.address.road}</p>
                    )}
                  </div>
                </div>
                
                {/* Link Address */}
                <div>
                  <label htmlFor="address.linkAddress" className="block text-sm font-medium text-gray-700">
                    Map Link (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      id="address.linkAddress"
                      name="address.linkAddress"
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Google Maps Link"
                      {...formik.getFieldProps('address.linkAddress')}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}