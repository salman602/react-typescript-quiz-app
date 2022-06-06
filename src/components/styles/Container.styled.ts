import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Container = styled.div`
  font-family: "Catamaran", sans-serif;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    margin-top: 0;
  }
  button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    padding: 8px 12px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    border: 2px solid #ddd;
    border-radius: 10px;
    background-color: linear-gradient(to right, magenta, violet);
  }

  .score {
    font-size: 2.3rem;
  }
`;
