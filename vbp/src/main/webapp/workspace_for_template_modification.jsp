<%@page contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Visualized Batch Print Client Workspace</title>
<%
try{
    String extjsVersion = null;
    if (extjsVersion == null || extjsVersion.trim().length() == 0) {
        extjsVersion = "ext-4.2.1-gpl";
    }
    String extjsThemeName = null;
    if (extjsThemeName == null || extjsThemeName.trim().length() == 0) {
    	extjsThemeName = "ext-theme-classic";
    }
    String styleName = request.getParameter("styleName");
    if (styleName != null && styleName.trim().length() > 0) {
%>
<link rel="stylesheet" type="text/css" href="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/resources/<%= extjsThemeName%>/build/resources/<%= extjsThemeName%>-all-<%= styleName%>.css" />
<%
    } else {
%>
<link rel="stylesheet" type="text/css" href="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/resources/<%= extjsThemeName%>/build/resources/<%= extjsThemeName%>-all.css" />
<%
    }
%>
<style type="text/css">
.white_backgroud_color {
    background-color: #ffffff;
}
</style>
<script type="text/javascript">
<!--//
var webrootWithBackslash = '<%= request.getContextPath()%>/';
var webrootWithoutBackslash = webrootWithBackslash.length > 1 ? webrootWithBackslash.substring(0, webrootWithBackslash.length - 1) : '';
//alert('webroot with backslash:' + webrootWithBackslash + '\n' + 'webroot without backslash:' + webrootWithoutBackslash);

function convertUri(uri) {
  if (uri != null) {
    return webrootWithoutBackslash + uri;
  }
  alert('warning:input url is null!(from function :convertUri)');
}

function convertUriWithTimestampSuffix(uri) {
  if (uri != null) {
    uri = convertUri(uri);
    if (uri.indexOf('?') != -1) {
      uri += '&';
    } else {
      uri += '?';
    }
    // return
    return uri + '_timestamp=' + new Date().getTime();
  }
  alert('warning:input url is null!(from function :convertUriWithTimestampSuffix)');
}

//-->
</script>
<!-- lodop js -->
<script type="text/javascript" src="<%= request.getContextPath()%>/lodop/6.159/LodopFuncs.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/ext-all-debug.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/locale/ext-locale-zh_CN.js"></script>
<script type="text/javascript">
<!--//
Ext.BLANK_IMAGE_URL = '<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/resources/themes/images/default/tree/s.gif';
Ext.Loader.setPath('cn.com.pingouin', convertUri('/js/cn/com/pingouin'));
//-->
</script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmPrintZoneFunctions.js"></script>
<script type="text/javascript">
	var vbpPrintZoneFunctions = Ext.create('cn.com.pingouin.vbp_client.VbptmPrintZoneFunctions');
	// test
	var vbpConfiguration = top.vbptmConfiguration;
</script>
<script type="text/javascript">
	function printZonePreview(vbpDataSource) {
		vbpPrintZoneFunctions.printZonePreview(vbpDataSource);
	}
</script>
<script type="text/javascript">
	function addNewStaticFloatDivision() {
		vbpPrintZoneFunctions.addNewStaticFloatDivision();
	}
</script>
<script type="text/javascript">
	function addNewDynamicFloatDivision() {
		vbpPrintZoneFunctions.addNewDynamicFloatDivision();
	}
</script>
<script type="text/javascript">
	function moveAllFloatDivisions(moveDistance) {
		vbpPrintZoneFunctions.moveAllFloatDivisions(moveDistance);
	}
</script>
<script type="text/javascript">
	function openPrintZoneConfigWindow() {
		vbpPrintZoneFunctions.openPrintZoneConfigWindow();
	}
</script>
<script type="text/javascript">
	function printZonePreviewWithoutData() {
		var LODOP = getLodopGlobal();
		
		vbpPrintZoneFunctions.printZonePreviewWithoutData(LODOP);
	}
</script>
<script type="text/javascript">
	function openTemplatePropertyConfigWindow() {
		vbpPrintZoneFunctions.openTemplatePropertyConfigWindow();
	}
</script>
<script type="text/javascript">
	function vbpTemplateSave(vbptmConfiguration) {
		vbpPrintZoneFunctions.vbpTemplateSave();
	}
</script>
<script type="text/javascript">
	function vbpTemplateSaveAs(vbptmConfiguration) {
		vbpPrintZoneFunctions.vbpTemplateSaveAs();
	}
</script>
<script type="text/javascript">
    function clientReceive(vbpDataSource) {
        
    	var LODOP = getLodopGlobal();
    	
    	vbpPrintZoneFunctions.initialFloatDivisions(vbpDataSource);
    	
    	var printResult = vbpPrintZoneFunctions.printByLodop(vbpDataSource, LODOP);
    	
    	return printResult;
    }
</script>
<script type="text/javascript">
    function getLodopGlobal() {
    	var lodopObId = null;
        var lodopEmId = null;
        if (Ext.isIE) {
            var lodopObId = 'LODOP_OB_IE';
            var lodopEmId = 'LODOP_EM_IE';
        } else {
            var lodopObId = 'LODOP_OB_FIREFOX';
            var lodopEmId = 'LODOP_EM_FIREFOX';
        }
        var LODOP = getLodop(document.getElementById(lodopObId), document.getElementById(lodopEmId));
        return LODOP;
    }
</script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmPrintZoneIFrame.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmPrintZonePanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmFloatDivisionConfigWindow.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmFloatDivisionConfigPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmPrintZoneConfigWindow.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmPrintZoneConfigPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmTemplatePropertyConfigWindow.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmTemplatePropertyConfigPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForComponentId.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForFloatType.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForSystemConfig.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmConfiguration.js"></script>
</head>
<body id="vbpPrintZoneBody" >
	<!-- lodop IE-->
	<object id="LODOP_OB_IE" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0 style="display:none" >
		<embed id="LODOP_EM_IE" type="application/x-print-lodop" width=0 height=0 pluginspage="lodop/6.159/install_lodop32.exe"></embed>
	</object>
	<!-- lodop Firefox-->
	<object id="LODOP_OB_FIREFOX" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0 > 
		<embed id="LODOP_EM_FIREFOX" type="application/x-print-lodop" width=0 height=0 pluginspage="lodop/6.159/install_lodop32.exe"></embed>
	</object>
	<div id="vbpPrintZone" class="vbpPrintZone" >
		<div id="div_1cm" style="width:1cm" />
	</div>
</body>
</html>
<%
}catch(Throwable t){
t.printStackTrace();
}
%>