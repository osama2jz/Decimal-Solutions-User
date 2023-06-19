import {
  Anchor,
  Button,
  Group,
  Paper,
  Popover,
  Space,
  Stack,
  Text
} from "@mantine/core";
import { useContext } from "react";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { AboutUsContext } from "../../context/AboutUsContext";

const ContactUsHoverButton = () => {
  const { aboutUs } = useContext(AboutUsContext);
  const handleNavigate = (link) => {
    window.open(link, "_blank");
    // window.open("https://web.whatsapp.com/send?phone=+923455893337&text=Hey Decimal Solutions!", "_blank");
  };
  return (
    <div
      style={{
        position: "fixed",
        // top: 0,
        bottom: 20,
        right: 20,
        zIndex: 999,
      }}
    >
      <Popover
        width={310}
        position="top-end"
        withArrow
        shadow="md"
        offset={20}
        arrowSize={10}
      >
        <Popover.Target>
          <Button
            variant="subtle"
            style={{
              border: "1px solid purple",
              color: "purple",
              backgroundColor: "white",
            }}
          >
            How Can We Help You?
          </Button>
        </Popover.Target>
        <Popover.Dropdown p={5}>
          <Stack spacing="xs" style={{ alignItems: "center" }}>
            <Paper bg="rgb(148, 31, 126)" p="xs">
              <Stack spacing={0} pb={"xs"}>
                <Text color="white">Hello!</Text>
                <Text color="white">
                  Feel Free To Contact Us or email us at{" "}
                  <Anchor
                    href={`mailto:${
                      aboutUs?.primaryEmail || "info@decimalsolution.com"
                    }`}
                    style={{ color: "white" }}
                  >
                    {aboutUs?.primaryEmail || "info@decimalsolution.com"}
                  </Anchor>
                </Text>
              </Stack>
            </Paper>
            <Space />
            <Group
              style={{ cursor: "pointer" }}
              noWrap
              onClick={() => {
                const regexToReplace = /https:\/\/www.facebook.com\//g;
                handleNavigate(
                  `https://m.me/${(
                    aboutUs?.facebook || "100093707136830"
                  ).replaceAll(regexToReplace, "")}`
                );
              }}
            >
              <BsMessenger color="blue" />{" "}
              <Text weight="normal">Messenger</Text>
            </Group>
            <Space />
            <Group
              style={{ cursor: "pointer" }}
              noWrap
              onClick={() => {
                const regexToReplace = /\s|-/g;
                handleNavigate(
                  `https://wa.me/${"+92-345-5893337".replaceAll(
                    regexToReplace,
                    ""
                  )}`
                );
              }}
            >
              <BsWhatsapp color="green" /> <Text>Whatsapp</Text>
            </Group>
            <Space />
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default ContactUsHoverButton;
