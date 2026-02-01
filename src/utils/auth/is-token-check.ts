type Props = {
  accessToken: string;
};

const isTokenCheck = ({ accessToken }: Props) => {
  const payloadBase64 = accessToken.split(".")[1];
  const payload = JSON.parse(atob(payloadBase64));
  const nowSec = Math.floor(Date.now() / 1000);
  return nowSec <= payload.exp ? true : false;
};

export default isTokenCheck;
