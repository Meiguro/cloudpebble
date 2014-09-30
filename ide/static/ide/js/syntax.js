CloudPebble.Editor.PebbleMode = {
    name: 'clike',
    useCPP: true,
    keywords: {
        // C
        'auto': true,
        'if': true,
        'break': true,
        'int': true,
        'case': true,
        'long': true,
        'char': true,
        'register': true,
        'continue': true,
        'return': true,
        'default': true,
        'short': true,
        'do': true,
        'sizeof': true,
        'double': true,
        'static': true,
        'else': true,
        'struct': true,
        'entry': true,
        'switch': true,
        'extern': true,
        'typedef': true,
        'float': true,
        'union': true,
        'for': true,
        'unsigned': true,
        'goto': true,
        'while': true,
        'enum': true,
        'void': true,
        'const': true,
        'signed': true,
        'volatile': true,
        'bool': true,
        '_Bool': true,
        'int8_t': true,
        'uint8_t': true,
        'int16_t': true,
        'uint16_t': true,
        'int32_t': true,
        'uint32_t': true,
        'time_t': true,
        // Pebble-specific
        'ACCEL_AXIS_X': true,
        'ACCEL_AXIS_Y': true,
        'ACCEL_AXIS_Z': true,
        'ACCEL_SAMPLING_100HZ': true,
        'ACCEL_SAMPLING_10HZ': true,
        'ACCEL_SAMPLING_25HZ': true,
        'ACCEL_SAMPLING_50HZ': true,
        'APP_LOG_LEVEL_DEBUG': true,
        'APP_LOG_LEVEL_DEBUG_VERBOSE': true,
        'APP_LOG_LEVEL_ERROR': true,
        'APP_LOG_LEVEL_INFO': true,
        'APP_LOG_LEVEL_WARNING': true,
        'APP_MSG_ALREADY_RELEASED': true,
        'APP_MSG_APP_NOT_RUNNING': true,
        'APP_MSG_BUFFER_OVERFLOW': true,
        'APP_MSG_BUSY': true,
        'APP_MSG_CALLBACK_ALREADY_REGISTERED': true,
        'APP_MSG_CALLBACK_NOT_REGISTERED': true,
        'APP_MSG_CLOSED': true,
        'APP_MSG_INTERNAL_ERROR': true,
        'APP_MSG_INVALID_ARGS': true,
        'APP_MSG_NOT_CONNECTED': true,
        'APP_MSG_OK': true,
        'APP_MSG_OUT_OF_MEMORY': true,
        'APP_MSG_SEND_REJECTED': true,
        'APP_MSG_SEND_TIMEOUT': true,
        'APP_WORKER_RESULT_ALREADY_RUNNING': true,
        'APP_WORKER_RESULT_ASKING_CONFIRMATION': true,
        'APP_WORKER_RESULT_DIFFERENT_APP': true,
        'APP_WORKER_RESULT_NOT_RUNNING': true,
        'APP_WORKER_RESULT_NO_WORKER': true,
        'APP_WORKER_RESULT_SUCCESS': true,
        'AccelAxisType': true,
        'AccelDataHandler': true,
        'AccelRawDataHandler': true,
        'AccelSamplingRate': true,
        'AccelTapHandler': true,
        'ActionBarLayer': true,
        'AnimationCurve': true,
        'AnimationCurveCustomFunction': true,
        'AnimationCurveEaseIn': true,
        'AnimationCurveEaseInOut': true,
        'AnimationCurveEaseOut': true,
        'AnimationCurveFunction': true,
        'AnimationCurveLinear': true,
        'AnimationSetupImplementation': true,
        'AnimationStartedHandler': true,
        'AnimationStoppedHandler': true,
        'AnimationTeardownImplementation': true,
        'AnimationUpdateImplementation': true,
        'AppFocusHandler': true,
        'AppLogLevel': true,
        'AppMessageInboxDropped': true,
        'AppMessageInboxReceived': true,
        'AppMessageOutboxFailed': true,
        'AppMessageOutboxSent': true,
        'AppMessageResult': true,
        'AppSyncErrorCallback': true,
        'AppSyncTupleChangedCallback': true,
        'AppTimer': true,
        'AppTimerCallback': true,
        'AppWorkerMessageHandler': true,
        'AppWorkerResult': true,
        'BUTTON_ID_BACK': true,
        'BUTTON_ID_DOWN': true,
        'BUTTON_ID_SELECT': true,
        'BUTTON_ID_UP': true,
        'BatteryStateHandler': true,
        'BitmapLayer': true,
        'BluetoothConnectionHandler': true,
        'ButtonId': true,
        'ClickConfigProvider': true,
        'ClickHandler': true,
        'ClickRecognizerRef': true,
        'CompassHeading': true,
        'CompassHeadingHandler': true,
        'CompassStatus': true,
        'CompassStatusCalibrated': true,
        'CompassStatusCalibrating': true,
        'CompassStatusDataInvalid': true,
        'DATA_LOGGING_BUSY': true,
        'DATA_LOGGING_BYTE_ARRAY': true,
        'DATA_LOGGING_CLOSED': true,
        'DATA_LOGGING_FULL': true,
        'DATA_LOGGING_INT': true,
        'DATA_LOGGING_INVALID_PARAMS': true,
        'DATA_LOGGING_NOT_FOUND': true,
        'DATA_LOGGING_SUCCESS': true,
        'DATA_LOGGING_UINT': true,
        'DAY_UNIT': true,
        'DICT_INTERNAL_INCONSISTENCY': true,
        'DICT_INVALID_ARGS': true,
        'DICT_MALLOC_FAILED': true,
        'DICT_NOT_ENOUGH_STORAGE': true,
        'DICT_OK': true,
        'DataLoggingItemType': true,
        'DataLoggingResult': true,
        'DataLoggingSessionRef': true,
        'Dictionary': true,
        'DictionaryKeyUpdatedCallback': true,
        'DictionaryResult': true,
        'DictionarySerializeCallback': true,
        'E_BUSY': true,
        'E_DOES_NOT_EXIST': true,
        'E_ERROR': true,
        'E_INTERNAL': true,
        'E_INVALID_ARGUMENT': true,
        'E_INVALID_OPERATION': true,
        'E_OUT_OF_MEMORY': true,
        'E_OUT_OF_RESOURCES': true,
        'E_OUT_OF_STORAGE': true,
        'E_RANGE': true,
        'E_UNKNOWN': true,
        'GAlign': true,
        'GAlignBottom': true,
        'GAlignBottomLeft': true,
        'GAlignBottomRight': true,
        'GAlignCenter': true,
        'GAlignLeft': true,
        'GAlignRight': true,
        'GAlignTop': true,
        'GAlignTopLeft': true,
        'GAlignTopRight': true,
        'GColor': true,
        'GColorBlack': true,
        'GColorClear': true,
        'GColorWhite': true,
        'GCompOp': true,
        'GCompOpAnd': true,
        'GCompOpAssign': true,
        'GCompOpAssignInverted': true,
        'GCompOpClear': true,
        'GCompOpOr': true,
        'GCompOpSet': true,
        'GContext': true,
        'GCornerBottomLeft': true,
        'GCornerBottomRight': true,
        'GCornerMask': true,
        'GCornerNone': true,
        'GCornerTopLeft': true,
        'GCornerTopRight': true,
        'GCornersAll': true,
        'GCornersBottom': true,
        'GCornersLeft': true,
        'GCornersRight': true,
        'GCornersTop': true,
        'GFont': true,
        'GPointGetter': true,
        'GPointReturn': true,
        'GPointSetter': true,
        'GRectGetter': true,
        'GRectReturn': true,
        'GRectSetter': true,
        'GTextAlignment': true,
        'GTextAlignmentCenter': true,
        'GTextAlignmentLeft': true,
        'GTextAlignmentRight': true,
        'GTextLayoutCacheRef': true,
        'GTextOverflowMode': true,
        'GTextOverflowModeFill': true,
        'GTextOverflowModeTrailingEllipsis': true,
        'GTextOverflowModeWordWrap': true,
        'HOUR_UNIT': true,
        'Int16Getter': true,
        'Int16Setter': true,
        'InverterLayer': true,
        'Layer': true,
        'LayerUpdateProc': true,
        'MINUTE_UNIT': true,
        'MONTH_UNIT': true,
        'MenuLayer': true,
        'MenuLayerDrawHeaderCallback': true,
        'MenuLayerDrawRowCallback': true,
        'MenuLayerDrawSeparatorCallback': true,
        'MenuLayerGetCellHeightCallback': true,
        'MenuLayerGetHeaderHeightCallback': true,
        'MenuLayerGetNumberOfRowsInSectionsCallback': true,
        'MenuLayerGetNumberOfSectionsCallback': true,
        'MenuLayerGetSeparatorHeightCallback': true,
        'MenuLayerSelectCallback': true,
        'MenuLayerSelectionChangedCallback': true,
        'MenuRowAlign': true,
        'MenuRowAlignBottom': true,
        'MenuRowAlignCenter': true,
        'MenuRowAlignNone': true,
        'MenuRowAlignTop': true,
        'NUM_BUTTONS': true,
        'NumSystemAnimationCurve': true,
        'NumberWindow': true,
        'NumberWindowCallback': true,
        'ResHandle': true,
        'RotBitmapLayer': true,
        'SECOND_UNIT': true,
        'SNIFF_INTERVAL_NORMAL': true,
        'SNIFF_INTERVAL_REDUCED': true,
        'S_FALSE': true,
        'S_NO_ACTION_REQUIRED': true,
        'S_NO_MORE_ITEMS': true,
        'S_SUCCESS': true,
        'S_TRUE': true,
        'ScrollLayer': true,
        'ScrollLayerCallback': true,
        'SimpleMenuLayer': true,
        'SimpleMenuLayerSelectCallback': true,
        'SniffInterval': true,
        'StatusCode': true,
        'TUPLE_BYTE_ARRAY': true,
        'TUPLE_CSTRING': true,
        'TUPLE_INT': true,
        'TUPLE_UINT': true,
        'TextLayer': true,
        'TextLayout': true,
        'TickHandler': true,
        'TimeUnits': true,
        'TupleType': true,
        'WATCH_INFO_COLOR_BLACK': true,
        'WATCH_INFO_COLOR_BLUE': true,
        'WATCH_INFO_COLOR_GREEN': true,
        'WATCH_INFO_COLOR_GREY': true,
        'WATCH_INFO_COLOR_MATTE_BLACK': true,
        'WATCH_INFO_COLOR_ORANGE': true,
        'WATCH_INFO_COLOR_PINK': true,
        'WATCH_INFO_COLOR_RED': true,
        'WATCH_INFO_COLOR_STAINLESS_STEEL': true,
        'WATCH_INFO_COLOR_UNKNOWN': true,
        'WATCH_INFO_COLOR_WHITE': true,
        'WATCH_INFO_MODEL_PEBBLE_ORIGINAL': true,
        'WATCH_INFO_MODEL_PEBBLE_STEEL': true,
        'WATCH_INFO_MODEL_UNKNOWN': true,
        'WatchInfoColor': true,
        'WatchInfoModel': true,
        'Window': true,
        'WindowHandler': true,
        'YEAR_UNIT': true,
        'status_t': true
    }
};
//var browserHeight = document.documentElement.clientHeight;
//code_mirror.getWrapperElement().style.height = (browserHeight - 130) + 'px';
//code_mirror.refresh();
//code_mirror.refresh();
//code_mirror.on('cursorActivity', function() {
//    code_mirror.matchHighlight('CodeMirror-matchhighlight');
//})
