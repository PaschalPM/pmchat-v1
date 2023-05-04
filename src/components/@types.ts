export type ContainerType = React.PropsWithChildren & {
	classname?: string
} 

export type UserProfileType = {
	id?: string,
	userId: string,
	imgSrc: string,
	displayName: string,
	email: string
} 