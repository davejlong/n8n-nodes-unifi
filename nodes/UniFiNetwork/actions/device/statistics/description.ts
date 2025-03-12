import { DeviceProperties } from "../../interfaces";

export const getDeviceStatistics: DeviceProperties = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['device'],
				operation: ['statistics'],
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
				operation: ['statistics'],
			},
		},
	},
];
