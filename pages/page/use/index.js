import { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

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

export default function MultipleInputsModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [numberValue, setNumberValue] = useState('')
  const [stringValue, setStringValue] = useState('')

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleNumberChange = event => {
    setNumberValue(event.target.value)
  }

  const handleStringChange = event => {
    setStringValue(event.target.value)
  }

  const handleSubmit = () => {
    alert(`شما عدد "${numberValue}" و رشته "${stringValue}" را وارد کردید.`)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal}>دریافت عدد و رشته</button>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="دریافت عدد و رشته"
      >
        <h2>ویرایش آگهی</h2>
        <InputContainer>
          <Input
            type="text"
            value={numberValue}
            onChange={handleNumberChange}
            placeholder="لطفاً عدد را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            value={stringValue}
            onChange={handleStringChange}
            placeholder="لطفاً رشته را وارد کنید"
          />
        </InputContainer>
        <Button onClick={handleSubmit}>ارسال</Button>
        <Button onClick={closeModal}>انصراف</Button>
      </StyledModal>
    </div>
  )
}
