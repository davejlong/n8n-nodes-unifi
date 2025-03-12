import { AllEntities, Entity, PropertiesOf } from "n8n-workflow";

type UniFiMap = {
	device: 'getAll';
	host: 'getAll' | 'get';
	site: 'getAll';
}

export type UniFi = AllEntities<UniFiMap>;

export type UnifiDevice = Entity<UniFiMap, 'device'>;
export type UniFiHost = Entity<UniFiMap, 'host'>;
export type UniFiSite = Entity<UniFiMap, 'site'>;

export type DeviceProperties = PropertiesOf<UnifiDevice>;
export type HostProperties = PropertiesOf<UniFiHost>;
export type SiteProperties = PropertiesOf<UniFiSite>;
