import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 860px;
  padding: 5px 10px;
`;

const FormTitle = styled.h2`
  margin-bottom: 2rem;
  color: #000;
  font-size: 34px;
  font-weight: 500;
`;

const FormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  gap: 16px;
`;

const Label = styled.label`
  flex: 1;
  color: #160041;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
`;

const Input = styled.input`
  flex: 2;
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 5px 13px;
  border-radius: 4px;
  width: 90%;
  margin-left: 35px;
  background-color: #fff;
  border: none;
  outline: none;
  text-align: right;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  flex: 2;
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 5px 13px;
  border-radius: 4px;
  width: 90%;
  margin-left: 35px;
  background-color: #fff;
  border: none;
  outline: none;
  text-align: right;
  resize: none;
  height: 80px;
  &:focus {
    outline: none;
  }
`;

const FileCameraContainer = styled.div`
  width: 220px;
  height: 220px;
  cursor: pointer;
`;

const ButtonCategoryContainer = styled.div`
  width: 50%;
  margin: 30px auto 5px auto;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 40%;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #5c2d91;
  color: #fff;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #fdf7ff;
  color: #757d8a;
  border: 1px solid #e1e3e6;
`;

const Form = styled.form`
  width: 100%;
`;

const StyledInput = styled.div`
  width: 65%;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageCamera = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 24px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
const StyledErrorMessage = styled.div`
  color: red;
  font-size: 1.1rem;
  margin-top: -5px;
`;
const validationSchema = Yup.object().shape({
  name: Yup.string().required("الاسم مطلوب"),
  url: Yup.string().required("الرابط مطلوب"),
  dailyRounds: Yup.number().required("عدد الجولات مطلوب").positive().integer(),
  winPoints: Yup.number().required("نقاط الفوز مطلوبة").positive().integer(),
  lossPoints: Yup.number().required("نقاط الخسارة مطلوبة").positive().integer(),
  description: Yup.string().required("الوصف مطلوب"),
  terms: Yup.string().required("الشروط والأحكام مطلوبة"),
  image: Yup.mixed().required("الصورة مطلوبة"),
});

function AddFormGame({ onClose, EditNameButton, title, onSave, game = {} }) {
  const formik = useFormik({
    initialValues: {
      name: game.name || "",
      url: game.url || "",
      dailyRounds: game.dailyRounds || "",
      winPoints: game.winPoints || "",
      lossPoints: game.lossPoints || "",
      description: game.description || "",
      terms: game.terms || "",
      image: game.image || null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSave(values);
      onClose();
    },
  });

  const handleImageClick = () => {
    document.getElementById("file-input").click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        formik.setFieldValue("image", e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <Form onSubmit={formik.handleSubmit} id="add-game-form">
        <StyledContent>
          <StyledInput>
            <FormFieldContainer>
              <Input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="name">الاسم</Label>
            </FormFieldContainer>
            {formik.touched.name && formik.errors.name && <StyledErrorMessage>{formik.errors.name}</StyledErrorMessage>}

            <FormFieldContainer>
              <Input type="text" id="url" name="url" value={formik.values.url} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="url">Url</Label>
            </FormFieldContainer>
            {formik.touched.url && formik.errors.url && <StyledErrorMessage>{formik.errors.url}</StyledErrorMessage>}

            <FormFieldContainer>
              <Input type="number" id="dailyRounds" name="dailyRounds" value={formik.values.dailyRounds} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="dailyRounds">عدد الجولات في اليوم الواحد</Label>
            </FormFieldContainer>
            {formik.touched.dailyRounds && formik.errors.dailyRounds && <StyledErrorMessage>{formik.errors.dailyRounds}</StyledErrorMessage>}

            <FormFieldContainer>
              <Input type="number" id="winPoints" name="winPoints" value={formik.values.winPoints} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="winPoints">نقاط الفوز</Label>
            </FormFieldContainer>
            {formik.touched.winPoints && formik.errors.winPoints && <StyledErrorMessage>{formik.errors.winPoints}</StyledErrorMessage>}

            <FormFieldContainer>
              <Input type="number" id="lossPoints" name="lossPoints" value={formik.values.lossPoints} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="lossPoints">نقاط الخسارة</Label>
            </FormFieldContainer>
            {formik.touched.lossPoints && formik.errors.lossPoints && <StyledErrorMessage>{formik.errors.lossPoints}</StyledErrorMessage>}

            <FormFieldContainer>
              <TextArea id="description" name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="description">وصف اللعبة</Label>
            </FormFieldContainer>
            {formik.touched.description && formik.errors.description && <StyledErrorMessage>{formik.errors.description}</StyledErrorMessage>}

            <FormFieldContainer>
              <TextArea id="terms" name="terms" value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Label htmlFor="terms">شروط وأحكام اللعبة</Label>
            </FormFieldContainer>
            {formik.touched.terms && formik.errors.terms && <StyledErrorMessage>{formik.errors.terms}</StyledErrorMessage>}
          </StyledInput>
          <FileCameraContainer onClick={handleImageClick}>
            <ImageCamera src={formik.values.image || "/Camera.svg"} />
            <HiddenFileInput id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
            {formik.touched.image && formik.errors.image && <StyledErrorMessage>{formik.errors.image}</StyledErrorMessage>}
          </FileCameraContainer>
        </StyledContent>

        <ButtonCategoryContainer>
          <CancelButton type="button" onClick={onClose}>
            إلغاء
          </CancelButton>
          <SubmitButton type="submit">{EditNameButton}</SubmitButton>
        </ButtonCategoryContainer>
      </Form>
    </FormContainer>
  );
}

export default AddFormGame;
