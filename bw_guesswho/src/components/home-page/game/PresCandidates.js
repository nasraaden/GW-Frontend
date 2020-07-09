import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import {
  Choice,
  ChoiceDiv,
  ChoiceDiv2,
  NameP,
  HandleP,
  ScoreP,
  InfoDiv,
  LevelP,
  PresCandImg,
} from '../../../styles/Styles';

const PresCandidates = (props) => {
  const id = localStorage.id;
  const putRequest = useState(
    axiosWithAuth()
      .put(`/api/users/${id}`, { points: props.score })
      .then(
        axiosWithAuth()
          .get(`/api/users/${id}`)
          .then((res) => {
            console.log('get points after put request', res);
          })
      )
  );
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [name3, setName3] = useState();

  const [handle1, setHandle1] = useState();
  const [handle2, setHandle2] = useState();
  const [handle3, setHandle3] = useState();
  const [correctAns, setCorrectAns] = useState();
  const [id1, setId1] = useState();
  const [id2, setId2] = useState();
  const [id3, setId3] = useState();
  const [wrongCount, setWrongCount] = useState(0);
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get('/api/tweets')
      .then((res) => {
        setHandle1(res.data.rounds[props.count].options[0].handle);
        setName1(res.data.rounds[props.count].options[0].name);
        setId1(res.data.rounds[props.count].options[0].id);
        setHandle2(res.data.rounds[props.count].options[1].handle);
        setName2(res.data.rounds[props.count].options[1].name);
        setId2(res.data.rounds[props.count].options[1].id);
        setHandle3(res.data.rounds[props.count].options[2].handle);
        setName3(res.data.rounds[props.count].options[2].name);
        setId3(res.data.rounds[props.count].options[2].id);
        setCorrectAns(res.data.rounds[props.count].correct_option_id);
        setImage(res.data.rounds[props.count].options[0].picture_url);
        setImage2(res.data.rounds[props.count].options[1].picture_url);
        setImage3(res.data.rounds[props.count].options[2].picture_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.count]);
  // console.log('tweet from pres', tweet);
  return (
    <div>
      <ChoiceDiv className='pres'>
        <Choice
          className='choice'
          id={id1}
          onClick={(e) => {
            e.preventDefault();
            e.target.id === correctAns
              ? { putRequest } && props.setScore(props.score + 1)
              : setWrongCount(wrongCount + 1);
            props.count === 29
              ? props.setCount(0)
              : props.setCount(props.count + 1);
          }}
        >
          <PresCandImg src={image} />
          <ChoiceDiv2>
            <NameP>{name1}</NameP>
            <HandleP>@{handle1}</HandleP>
          </ChoiceDiv2>
        </Choice>

        <Choice
          className='choice'
          id={id2}
          onClick={(e) => {
            e.preventDefault();
            e.target.id === correctAns
              ? { putRequest } && props.setScore(props.score + 1)
              : setWrongCount(wrongCount + 1);
            props.count === 29
              ? props.setCount(0)
              : props.setCount(props.count + 1);
          }}
        >
          <PresCandImg src={image2} />
          <ChoiceDiv2>
            <NameP>{name2}</NameP>
            <HandleP>@{handle2}</HandleP>
          </ChoiceDiv2>
        </Choice>

        <Choice
          className='choice'
          id={id3}
          onClick={(e) => {
            e.preventDefault();
            e.target.id === correctAns
              ? { putRequest } && props.setScore(props.score + 1)
              : setWrongCount(wrongCount + 1);
            props.count === 29
              ? props.setCount(0)
              : props.setCount(props.count + 1);
          }}
        >
          <PresCandImg src={image3} />
          <ChoiceDiv2>
            <NameP>{name3}</NameP>
            <HandleP className='handle'>@{handle3}</HandleP>
          </ChoiceDiv2>
        </Choice>
      </ChoiceDiv>
      <InfoDiv>
        <ScoreP>Score: {props.score}</ScoreP>
        <LevelP>Level: {Math.floor(props.score / 10)}</LevelP>
      </InfoDiv>
    </div>
  );
};

export default PresCandidates;
