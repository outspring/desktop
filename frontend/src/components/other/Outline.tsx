import classes from "./Outline.module.css";

import { Group, Textarea } from "@mantine/core";
import { OutlineCircle } from "../button/OutlineCircle";
import { OutlineExpand } from "../button/OutlineExpand";
import { OutlineOptions } from "../button/OutlineOptions";

export function Outline() {
	return (
		<Group gap={5} align="start" wrap="nowrap">
			<OutlineOptions />
			<OutlineExpand />
			<OutlineCircle />
			<TextOutline />
		</Group>
	);
}

function TextOutline() {
	return (
		<Textarea
			w="100%"
			autosize
			minRows={0}
			placeholder="Start typing..."
			classNames={{
				input: classes.textOutline,
			}}
			styles={{
				input: {
					padding: 0,
					height: "fit-content",
				},
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					e.preventDefault();
				}
			}}
		/>
	);
}
