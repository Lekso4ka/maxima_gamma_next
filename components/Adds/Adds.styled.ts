import styled from "@emotion/styled"

export const Wrapper = styled.section`
  width: 440px;
  margin: auto;
  padding: 20px;
`

export const DivWrapper = styled.div`
  background-color: silver;
  background-image: ${({pic}) => `url(${pic})`};
  background-position: center;
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  display: grid;
  gap: 20px;
  &>* {
    width: 65%;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 1.3em;
  }
`