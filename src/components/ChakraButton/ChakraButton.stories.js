import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default {
	title: "Chakra Button",
	component: Button,
};

export const Success = () => <Button variant='green'>Success</Button>;
export const Danger = () => <Button variant='red'>Danger</Button>;
