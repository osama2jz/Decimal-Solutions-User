import { Anchor, Text } from "@mantine/core";

const HyperLink = ({ url }) => {
  const withHttp = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      url = `http://${url}`;
    }
    return url;
  };

  return (
    <Anchor href={withHttp(url)} target="_blank">
      <Text align="justify">{url}</Text>
    </Anchor>
  );
};

export default HyperLink;
