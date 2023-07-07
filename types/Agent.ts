export type Agent = {
	uuid: string;
	displayName: string;
	description: string;
	developerName: string;
	characterTags: string;
	displayIcon: string;
	displayIconSmall: string;
	bustPortrait: string;
	fullPortrait: string;
	fullPortraitV2: string;
	killfeedPortrait: string;
	background: string;
	backgroundGradientColors: [];
	assetPath: string;
	isFullPortraitRightFacing: boolean;
	isPlayableCharacter: boolean;
	isAvailableForTest: boolean;
	isBaseContent: boolean;
	role: {
		uuid: string;
		displayName: string;
		description: string;
		displayIcon: string;
		assetPath: string;
	};
	abilities: Abilities[];
	voiceLine: {};
}

interface Abilities {
	description: string;
	displayIcon: string;
	displayName: string;
	slot: string;
}