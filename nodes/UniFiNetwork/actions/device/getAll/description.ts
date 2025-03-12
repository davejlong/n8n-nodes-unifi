import { DeviceProperties } from "../../interfaces";

export const getDevices: DeviceProperties = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['device'],
				operation: ['getAll'],
			},
		},
	},
];
