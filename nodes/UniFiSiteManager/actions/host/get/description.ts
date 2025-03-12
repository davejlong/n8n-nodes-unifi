import { HostProperties } from "../../interfaces";

export const getHost: HostProperties = [
	{
		displayName: 'Host ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['host'],
				operation: ['get'],
			},
		},
	},
];
