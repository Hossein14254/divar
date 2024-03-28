import React from 'react'
import Link from 'next/link'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { set } from 'mongoose'

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #ccc;
  outline: none;
  max-width: 400px;
  width: 100%;
`

const InputContainer = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #0056b3;
  }
`

export default function CPT({ _id, name, city, pric, img }) {
  const [isOpen, setIsOpen] = useState(false)
  const [names, setNames] = useState('')
  const [dastes, setDastes] = useState('')
  const [prics, setPrics] = useState('')
  const [citys, setCitys] = useState('')
  const [conditions, setConditions] = useState('')
  const [transfrees, setTransfrees] = useState('')
  const [texts, setTexts] = useState('')
  const [nums, setNums] = useState('')
  const [imgs, setImgs] = useState('')
  const [dates, setDates] = useState([])
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/shop')
      const data = await response.json()
      setDatas(data)
      setMessage(data.message)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
    }
  }

  const openModal = async () => {
    setIsOpen(true)
    await fetchData() // انتظار برای دریافت داده‌ها از API
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const hand1 = event => {
    setNames(event.target.value)
  }
  const hand2 = event => {
    setCitys(event.target.value)
  }
  const hand3 = event => {
    setPrics(event.target.value)
  }
  const hand4 = event => {
    setConditions(event.target.value)
  }
  const hand5 = event => {
    setTransfrees(event.target.value)
  }
  const hand6 = event => {
    setNums(event.target.value)
  }
  const hand7 = event => {
    setImgs(event.target.value)
  }
  const hand8 = event => {
    setTexts(event.target.value)
  }
  const hand9 = event => {
    setDastes(event.target.value)
  }

  const sends = () => {
    const Data = {
      name: names,
      daste: dastes,
      pric: prics,
      city: citys,
      condition: conditions,
      transfree: transfrees,
      text: texts,
      num: nums,
      img: imgs,
    }
    setDates(Data)
    fetch(`/api/up`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ Data, _id }),
    })
      .then(response => {
        if (response.ok) {
          console.log(Data)
          console.log('دخیره شد')
          showAlert1()
        } else {
          console.error(response)
          console.log('دخیره نشد')
          showAlert2()
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })

    closeModal()
  }

  const handleDelete = async () => {
    showAlert1()
    fetch('/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }), // تغییر این خط
    })
      .then(response => {
        if (response.ok) {
          console.log('حذف شد')
        } else {
          console.error(response)
          showAlert2()
          console.log('خذف نشد')
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
    console.log('start delet', _id)
  }

  const confirmDelete = () => {
    confirmAlert({
      title: 'حذف آگهی',
      message: 'آیا مطمئنید که می‌خواهید این آگهی را حذف کنید؟',
      buttons: [
        {
          label: 'بله',
          onClick: () => handleDelete(),
        },
        {
          label: 'خیر',
          onClick: () => {},
        },
      ],
    })
  }
  const showAlert1 = () => {
    Swal.fire({
      icon: 'success',
      title: 'عملایت موفق',
    })
    {
      reloadPageAfterDelay()
    }
  }
  const showAlert2 = () => {
    Swal.fire({
      icon: 'error',
      title: 'عملایت نا موفق',
    })
  }
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload()
    }, 2000) // 2000 میلی‌ثانیه معادل با 2 ثانیه است
  }
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="دریافت عدد و رشته"
      >
        <h2>ویرایش آگهی</h2>
        {datas.map(
          (item, index) =>
            item._id == _id && (
              <>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand1(event, index)}
                    placeholder="نام آگهی"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand2(event, index)}
                    placeholder="شهر"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand3(event, index)}
                    placeholder="قیمت"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand9(event, index)}
                    placeholder="دسته بندی"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand4(event, index)}
                    placeholder="وضعیت"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand5(event, index)}
                    placeholder="معاوضه"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand6(event, index)}
                    placeholder="شماره تماس"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand7(event, index)}
                    placeholder="تصویر"
                  />
                </InputContainer>
                <InputContainer key={index}>
                  <Input
                    onChange={event => hand8(event, index)}
                    placeholder="توضیحات"
                  />
                </InputContainer>
              </>
            ),
        )}
        <Button onClick={sends}>ارسال</Button>
        <Button onClick={closeModal}>انصراف</Button>
      </StyledModal>
      <div>
        <Link href={`/`} className="link">
          <div className="col-lg-6">
            <div className="row agahi-boxwidth-2">
              <div className="col-7">
                <h4>{name}</h4>
                <h6 className="h6">{pric} ملیون تومان</h6>
                <h6>از {city}</h6>
                <p></p>
                <p></p>
                <p></p>
                <h5>لحظاتی پیش در {city}</h5>
              </div>
              <div className="col-5">
                <div className="square-container">
                  <img
                    className="square-image"
                    src={img + '.jpg'}
                    alt="تصویر"
                  ></img>
                </div>
              </div>
              <div className="bttn-vd">
                <Link href={`/shop/${_id}`}>
                  <button className="bttn-v">مشاهده</button>
                </Link>
                <button className="bttn-v" onClick={openModal}>
                  ویرایش
                </button>
                <button className="bttn-d" onClick={confirmDelete}>
                  حذف
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
