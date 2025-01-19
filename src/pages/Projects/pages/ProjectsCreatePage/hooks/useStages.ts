import { useCallback, useState } from "react";

export type UseStagesProps = {
	count: number;
	start?: number;
};

export type UseStagesResult = {
	index: number;
	isFirst: boolean;
	isFinal: boolean;
	isFinished: boolean;
	next: () => void;
	prev: () => void;
};

export const useStages = (props: UseStagesProps): UseStagesResult => {
	// 2 stages: 0, 1, 2 where 2 shows it is finished
	const finishedIdx = props.count;
	const finalIdx = props.count - 1;

	const [stageIdx, setStageI] = useState(props.start ?? 0);

	const next = useCallback(() => {
		setStageI((prev) => {
			if (prev === finishedIdx) {
				return prev;
			}

			return prev + 1;
		});
	}, [props.count]);

	const prev = useCallback(() => {
		setStageI((prev) => {
			if (prev === 0) {
				return prev;
			}

			return prev - 1;
		});
	}, [props.count]);

	return {
		index: stageIdx,
		isFirst: stageIdx === 0,
		isFinal: stageIdx === finalIdx,
		isFinished: stageIdx === finishedIdx,
		next,
		prev,
	};
};
