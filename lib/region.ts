// Region detection for the Africa version of the home page.
//
// The site is a static export, so there is no server to read the visitor's
// country. We infer the region from the browser's IANA time zone instead: it
// needs no network call or third-party geo-IP service, and is available before
// the first paint. African visitors get the Africa home page at "/" itself,
// no redirect, the URL never changes.
//
// `?region=africa` / `?region=global` forces a version and remembers it, so the
// team can preview either one from anywhere; `?region=auto` clears that.

export const REGION_STORAGE_KEY = "cw-region";

export type Region = "africa" | "global";

// African countries and territories whose zones sit outside the "Africa/" prefix.
const AFRICAN_TIME_ZONES = [
  "Atlantic/Cape_Verde",
  "Atlantic/St_Helena",
  "Indian/Antananarivo",
  "Indian/Comoro",
  "Indian/Mahe",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
];

// Inline <head> script: resolves the region and stamps it on <html data-region>
// before anything paints. CSS keys off that attribute to hide the global home
// page from African visitors until React swaps in the Africa version, so they
// never see a flash of the wrong page. The attribute is the single source of
// truth that useRegion() reads.
export const regionDetectScript = `(function(){try{
var k=${JSON.stringify(REGION_STORAGE_KEY)},r=null;
var q=new URLSearchParams(location.search).get("region");
if(q==="africa"||q==="global"){localStorage.setItem(k,q);}
else if(q==="auto"){localStorage.removeItem(k);}
var s=localStorage.getItem(k);
if(s==="africa"||s==="global"){r=s;}
else{var tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
r=(tz.indexOf("Africa/")===0||${JSON.stringify(AFRICAN_TIME_ZONES)}.indexOf(tz)>-1)?"africa":"global";}
document.documentElement.setAttribute("data-region",r);
}catch(e){document.documentElement.setAttribute("data-region","global");}})();`;
