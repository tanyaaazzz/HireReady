import {
  User,
  Globe,
  Mail,
  Phone,
  MapPin,
  CircleUser,
  BriefcaseBusinessIcon,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PersonalInfoform = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  // Build/revoke object URL only when the image file actually changes,
  // instead of calling URL.createObjectURL on every render (memory leak fix)
  useEffect(() => {
    if (data?.image && typeof data.image === 'object') {
      const url = URL.createObjectURL(data.image)
      setImagePreviewUrl(url)

      return () => URL.revokeObjectURL(url)
    } else {
      setImagePreviewUrl(null)
    }
  }, [data?.image])

  const fields = [
    {
      key: "full_name",
      label: "Full Name",
      icon: User,
      type: "text",
      required: true
    },
    {
      key: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      required: true
    },
    {
      key: "phone",
      label: "Phone Number",
      icon: Phone,
      type: "tel",
    },
    {
      key: "location",
      label: "Location",
      icon: MapPin,
      type: "text",
    },
    {
      key: "profession",
      label: "Profession",
      icon: BriefcaseBusinessIcon,
      type: "text",
    },
    {
      key: "linkedin",
      label: "LinkedIn Profile",
      icon: CircleUser,
      type: "url",
    },
    {
      key: "website",
      label: "Portfolio",
      icon: Globe,
      type: "url",
    }
  ]

  return (
    <div className='space-y-5'>
      <div>
        <h3 className='text-xl font-bold text-slate-800'>
          Personal Information
        </h3>
        <p className='text-sm text-slate-500 mt-1'>
          Get Started with personal information
        </p>
      </div>

      <div className='flex items-center gap-4'>
        <label className='cursor-pointer'>
          {data?.image ? (
            <img
              src={
                typeof data.image === 'string'
                  ? data.image
                  : imagePreviewUrl
              }
              alt='Profile'
              className='w-16 h-16 rounded-full object-cover mt-2 ring ring-slate-300 hover:opacity-80 transition-all'
            />
          ) : (
            <div className='inline-flex items-center gap-2 mt-2 text-slate-600 hover:text-slate-700 cursor-pointer'>
              <User className='w-16 h-16 p-2.5 border border-slate-300 rounded-full' />
              <span className='text-sm font-medium'>
                Upload User Image
              </span>
            </div>
          )}

          <input
            type='file'
            accept='image/jpeg,image/png'
            className='hidden'
            onChange={(e) =>
              handleChange('image', e.target.files[0])
            }
          />
        </label>

        {typeof data?.image === 'object' && data?.image && (
          <div className='flex flex-col gap-2 pl-2 text-sm'>
            <p className='font-medium text-slate-700'>
              Remove Background
            </p>

            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only peer'
                onChange={() =>
                  setRemoveBackground((prev) => !prev)
                }
                checked={removeBackground}
              />

              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-600 transition-colors duration-200'></div>

              <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4'></span>
            </label>
          </div>
        )}
      </div>

      {fields.map((field) => {
        const Icon = field.icon

        return (
          <div key={field.key} className='space-y-1 mt-5'>
            <label className='flex items-center gap-2 text-sm font-medium text-gray-600'>
              <Icon className='size-4' />
              {field.label}
              {field.required && (
                <span className='text-red-500'>*</span>
              )}
            </label>

            <input
              type={field.type}
              value={data[field.key] || ""}
              onChange={(e) =>
                handleChange(field.key, e.target.value)
              }
              className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none transition-colors text-sm'
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              required={field.required}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PersonalInfoform

