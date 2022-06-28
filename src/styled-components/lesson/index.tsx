import styled from 'styled-components/native';

export const LessonListContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5%;
  border-radius: 20px;
`;

export const LessonCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #613070;
  margin-top: 10px;
  height: 110px;
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
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const LessonCardTitle = styled.Text`
  letter-spacing: 1px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;

export const AuthorContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const LessonCardAuthor = styled.Text`
  color: #d2c5b6;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;

// LESSON DETAILS

export const LessonDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: #320d51;
  padding: 20px;
  flex-direction: column;
`;

export const LessonDetailsInfoContainer = styled.View`
  padding: 10px;
`;

export const LessonDetailsContentContainer = styled.ScrollView`
  display: flex;
  padding: 10px;
  margin-top: 10px;
`;

export const LessonDetailsTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 5px;
`;

export const LessonDetailsCategory = styled.Text`
  color: #f7dc6f;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const LessonDetailsAuthor = styled.Text`
  color: #d2c5b6;
  align-self: baseline;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const LessonDetailsCardImage = styled.Image`
  display: flex;
  width: auto;
  height: 35%;
  border-radius: 20px;
`;

export const LessonDetailsDescriptionText = styled.Text`
  font-size: 18px;
  color: #e2ecec;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 20px;
  opacity: 0.8;
`;

// Lesson player
export const LessonPlayerContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 10%;
  background-color: #613070;
`;

export const LessonPlayerImage = styled.Image`
  flex: 0.2;
  width: 10px;
  margin: 7px;
  margin-left: 20px;
  border-radius: 10px;
`;

export const LessonPlayerContent = styled.View`
  display: flex;
  flex: 1;
`;

export const LessonPlayerContentTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px;
`;

export const LessonPlayerContentProgress = styled.Text`
  flex: 1;
  color: #fff;
  letter-spacing: 1px;
  padding: 5px;
  margin-bottom: 8px;
`;

export const LessonPlayerSoundImageContainer = styled.View`
  display: flex;
  flex: 0.2;
  padding: 5px;
`;
export const LessonPlayerSoundImage = styled.Image`
  flex: 1;
  margin: 8px;
`;
