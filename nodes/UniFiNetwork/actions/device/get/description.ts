import { DeviceProperties } from "../../interfaces";

export const getDevice: DeviceProperties = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['device'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['device'],
				operation: ['get'],
			},
		},
	},
];
