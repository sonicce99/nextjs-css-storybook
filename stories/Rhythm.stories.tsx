import App from "components/Rhythm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Rhythm",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
