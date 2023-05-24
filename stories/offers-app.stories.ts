import { html, TemplateResult } from 'lit';
import '../src/offers-app.js';

export default {
  title: 'OffersApp',
  component: 'offers-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <offers-app style="--offers-app-background-color: ${backgroundColor}" .header=${header}></offers-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
