(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[9],{1127:function(e,t,i){var a=i(1200),n={init:function(){a.get("DataLibLoader").start()},services:[],types:[]};i(1370),i(7).registerApi(n,a),e.exports=n},1200:function(e,t,i){e.exports=i(7).create()},1370:function(e,t,i){i(1200).register("DataLibLoader").asCtor(function(t,i,a,n,r){this.start=function(){var e=t.getSettingsFile();i.addScriptWithCallback(e.Components.DataLib,"onDataLibReady",function(){return{wmDependencies:{settingsFile:t,siteConfigManager:a,auditSourceManager:n,libDestroyer:r}}},function(){r.removeWalkMe("Failed loading data lib")})}}).dependencies("SettingsFile, CommonUtils, SiteConfigManager, AuditSourceManager, LibDestroyer")}}]);