<%@page contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Visualized Batch Print Client Template Modification</title>
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
<%
    String sampleName = request.getParameter("sampleName");
    if (sampleName != null && sampleName.trim().length() > 0) {
        sampleName = sampleName.trim();
    } else {
        sampleName = null;
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
<script type="text/javascript" src="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/ext-all-debug.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/locale/ext-locale-zh_CN.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/examples/ux/IFrame.js"></script>
<script type="text/javascript">
<!--//
Ext.BLANK_IMAGE_URL = '<%= request.getContextPath()%>/js/com/sencha/products/extjs/<%= extjsVersion%>/resources/themes/images/default/tree/s.gif';
Ext.Loader.setPath('cn.com.pingouin', convertUri('/js/cn/com/pingouin'));
//-->
</script>
<script type="text/javascript">
<!--//
var bcpWorkspaceUrl = 'workspace_for_template_modification.jsp';
//-->
</script>
<%
    if (sampleName != null) {
%>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/VbpConfiguration.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/VbpDataSource.js"></script>
<script type="text/javascript">
<!--//
var vbptmConfiguration = Ext.create('cn.com.pingouin.vbp_client_samples.<%=sampleName %>.VbpConfiguration');
var dataSource = Ext.create('cn.com.pingouin.vbp_client_samples.<%=sampleName %>.VbpDataSource');
//-->
</script>
<%
    } else {
%>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/VbptmConfiguration.js"></script>
<script type="text/javascript">
<!--//
var vbptmConfiguration = Ext.create('cn.com.pingouin.vbp_client_template_modification.VbptmConfiguration');
//-->
</script>
<%
    }
%>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/IndexOfVbptm.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForSystemConfig.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForComponentId.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForFloatType.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client/utils/ConstantsForComponentDefaultValue.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/modules/OperationPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/modules/RuntimeConfigPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/modules/TemplateOperationPanel.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/modules/helpers/OperationHelper.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/js/cn/com/pingouin/vbp_client_template_modification/modules/helpers/RuntimeConfigHelper.js"></script>
</head>
<body>
</body>
</html>
<%
}catch(Throwable t){
t.printStackTrace();
}
%>