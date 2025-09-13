import { Button, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const PopovePackApp = ({ children, label }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text size="sm">{label}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
