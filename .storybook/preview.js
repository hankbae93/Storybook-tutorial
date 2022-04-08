import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
};
