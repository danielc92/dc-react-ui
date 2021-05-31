// Button.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import Typography from "./Typography";
import { HeadingProps } from "./Typography.types";
const { Heading } = Typography;
export default {
  title: "Components/Typography/Heading",
  component: Typography.Heading,
  args: {
    children: "Example Heading",
  },
} as Meta<HeadingProps>;

const Template: Story<HeadingProps> = (args) => {
  return <Heading {...args} />;
};

export const Level1Jumbo: Story<HeadingProps> = Template.bind({});
Level1Jumbo.args = {
  level: 1,
  jumbo: true,
};
export const Level1: Story<HeadingProps> = Template.bind({});
Level1.args = {
  level: 1,
};
export const Level2: Story<HeadingProps> = Template.bind({});
Level2.args = {
  level: 2,
};
export const Level3: Story<HeadingProps> = Template.bind({});
Level3.args = {
  level: 3,
};
export const Level4: Story<HeadingProps> = Template.bind({});
Level4.args = {
  level: 4,
};
export const Level5: Story<HeadingProps> = Template.bind({});
Level5.args = {
  level: 5,
};
export const Level6: Story<HeadingProps> = Template.bind({});
Level6.args = {
  level: 6,
};
