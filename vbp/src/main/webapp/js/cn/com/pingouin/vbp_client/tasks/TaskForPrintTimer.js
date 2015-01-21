/**
 * 打印定时任务
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.tasks.TaskForPrintTimer'//
    , {
      
      config : {
        taskForPrintControl : null,// 打印控制任务实例
        runtimeConfigPanel : null,// 运行时配置面板
        //
        nothing : null
      },
      
      previousTimeMilliseconds : -1,// 上次时间
      
      run : function() {
        
        var taskForPrintControl = this.taskForPrintControl;
        var runtimeConfigPanel = this.runtimeConfigPanel;
        
        // "打印按钮"处于按下状态,启动任务
        if (taskForPrintControl.printStartButtonPressed) {
          
          // 初始化上次时间
          var previousTimeMilliseconds = this.previousTimeMilliseconds;
          if (previousTimeMilliseconds < 0) {
            this.previousTimeMilliseconds = Ext.Date.now();
            previousTimeMilliseconds = this.previousTimeMilliseconds;
          }
          
          // 读取"运行时配置面板"的间隔时间,单位为秒.
          var intervalSecondsTextfiled = runtimeConfigPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_intervalSecondCmp);
          var intervalSeconds = intervalSecondsTextfiled.getValue();
          var intervalSecondsInMilliseconds = intervalSeconds * 1000;
          
          // 计算剩余时间间隔
          var nowTimeInMilliseconds = Ext.Date.now();
          var remainderTimeInMilliseconds = previousTimeMilliseconds + intervalSecondsInMilliseconds - nowTimeInMilliseconds;
          
          // 剩余时间以秒计算,可以找个地方显示距离下次打印的倒计时
          var remainderTimeInSeconds = Math.round(remainderTimeInMilliseconds / 1000);
          
          // 判断是否已经到达定时时间
          if (remainderTimeInMilliseconds < 0) {
            // 到达定时时间
            // 置标志位
            taskForPrintControl.printTimeIntervalArrivaled = true;
            // 记录上一次定时时间
            this.previousTimeMilliseconds = nowTimeInMilliseconds;
          }
        }
      },
      
      //
      nothing : null
    }//
);
