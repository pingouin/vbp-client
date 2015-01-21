Ext.require('*');

// initialize function
var initializeFunction = function() {
  
  // initialize tip
  Ext.QuickTips.init();
  
  // included containers
  var includedContainers = new Array();
  // include center container
  
  // 验证数据源格式正确与否
  var isValid = cn.com.pingouin.vbp_client.utils.DataSourceValidation.isValid(dataSource, vbpConfiguration);
  
  if (isValid) {
    
    // 将数据源封装成系统需要的数据格式，返回数据结果封装
    cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.processDataResult(dataSource);
    
    var eastPanelWidth = 400;
    
    // 数据列表面板
    var dataGridPanel = Ext.create(//
        'cn.com.pingouin.vbp_client.modules.DataGridPanel'//
        , {
          flex : 1,
          width : eastPanelWidth,
          vbpConfiguration : vbpConfiguration
        }//
    );
    
    // 打印控制面板
    var operationPanel = Ext.create(//
        'cn.com.pingouin.vbp_client.modules.OperationPanel'//
        , {
          height : 70
        }//
    );
    
    // 参数调整面板
    var runtimeConfigPanel = Ext.create(//
        'cn.com.pingouin.vbp_client.modules.RuntimeConfigPanel'//
        , {
          height : 100,
          vbpConfiguration : vbpConfiguration
        }//
    );
    
    // 打印日志
    var logPanel = Ext.create(//
        'cn.com.pingouin.vbp_client.modules.LogPanel'//
        , {
          height : 100
        }//
    );
    
    includedContainers.push(//
        {
      region : 'north',
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_northContainer,
      height : 32,
      xtype : 'panel',
      html : '批量打印客户端',
      listeners : {
        render : {
          fn : function() {
          },
          scope : this
        }
      }
    }  //
    , {
      region : 'center',
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe,
      xtype : 'uxiframe',
      name : 'iframe',
      frameName : 'iframe',
      src : bcpWorkspaceUrl,
      listeners : {
        show : {
          fn : function() {
          },
          scope : this
        }
      }
    }  //
    ,

    {
      split : true,
      collapsible : true,
      layout : {
        type : 'vbox',
        align : 'stretch'
      },
      items : [//
      dataGridPanel //
          , operationPanel//
          , runtimeConfigPanel//
          , logPanel//
      ],
      region : 'east',
      width : eastPanelWidth,
      xtype : 'panel'
      
    }  //
        
    , {
      region : 'south',
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_southContainer,
      height : 32,
      xtype : 'panel',
      html : '@D\'artagnan',
      listeners : {
        render : {
          fn : function() {
          },
          scope : this
        }
      }
    }  //
    );
    
    // viewport
    var viewport = Ext.create(//
        'Ext.container.Viewport'//
        , {
          layout : 'border',
          id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_viewPort,
          items : includedContainers,
          margins : '0 0 0 0',
          //
          nothing : null
        }//
    );
    
    // 打印控制任务
    var taskForPrintControl = Ext.create('cn.com.pingouin.vbp_client.tasks.TaskForPrintControl');
    taskForPrintControl.interval = 1000;
    
    // 设置到operationPanel中
    operationPanel.taskForPrintControl = taskForPrintControl;
    
    // 打印定时任务
    var taskForPrintTimer = Ext.create('cn.com.pingouin.vbp_client.tasks.TaskForPrintTimer');
    taskForPrintTimer.interval = 1000;
    
    // 设置
    taskForPrintTimer.taskForPrintControl = taskForPrintControl;
    taskForPrintTimer.runtimeConfigPanel = runtimeConfigPanel;
    
    // 打印状态任务
    var taskForPrintStatus = Ext.create('cn.com.pingouin.vbp_client.tasks.TaskForPrintStatus');
    taskForPrintStatus.interval = 1000;
    
    // 设置
    taskForPrintStatus.taskForPrintControl = taskForPrintControl;
    taskForPrintControl.taskForPrintStatus = taskForPrintStatus;
    
    // 启动任务
    Ext.TaskManager.start(taskForPrintControl);
    Ext.TaskManager.start(taskForPrintTimer);
    Ext.TaskManager.start(taskForPrintStatus);
    
  }
  
};

// on ready
Ext.onReady(initializeFunction);