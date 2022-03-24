import styled from 'styled-components';

const Loading = styled.div`
  position: relative;
  width: var(--radius);
  height: var(--radius);
  border-radius: 50%;
  border: var(--ring-width) solid var(--light-color);

&:before {
  position: absolute;
  display: block;
  left: -4px;
  top:-5px;
  content: ' ';
  width:100%;
  height: 100%;
  border-radius: 50%;
  border: var(--ring-width) solid;
  border-color: var(--dark-color) transparent transparent transparent;
  animation: loading-rotate .8s ease-out infinite;
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;


const Holder = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {Loading,Holder};