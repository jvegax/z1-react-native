import styled from 'styled-components/native';

export const LessonCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #613070;
  margin-top: 10px;
  height: 100px;
  padding: 7px;
  border-radius: 10px;
`;

export const LessonCardImage = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 10px;
`;

export const LessonCardContent = styled.View`
  flex: 1px;
  padding: 0px;
  margin-left: 10px;
  margin-bottom: 0px;
`;

export const LessonCardCategory = styled.Text`
  color: #f7dc6f;
  font-size: 10;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const LessonCardTitle = styled.Text`
  letter-spacing: 1px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const AuthorContainer = styled.View`
  display: flex;
  justify-content: flex-end;
`;

export const LessonCardAuthor = styled.Text`
  color: #d2c5b6;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;
