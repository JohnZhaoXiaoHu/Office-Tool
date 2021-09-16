"use strict";
(self.manageOffice_webpackJsonp = self.manageOffice_webpackJsonp || []).push([[75], {
    Ai0x: function(e) {
        e.exports = JSON.parse('{"categories":[{"name":"L_MicrosoftOfficePublisher","displayName":"Microsoft Publisher 2016"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_PubOptions","displayName":"Publisher Options"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Advanced","displayName":"Advanced"},{"parentCategory":{"ref":"L_Advanced"},"name":"L_ComplexScripts","displayName":"Complex scripts"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_General","displayName":"General"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Proofing","displayName":"Proofing"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_OptionsCustomizeRibbon","displayName":"Customize Ribbon"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Save","displayName":"Save"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_Miscellaneous","displayName":"Miscellaneous"}],"policies":[{"parentCategory":{"ref":"L_OptionsCustomizeRibbon"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisplayDeveloperTab","displayName":"Display Developer tab in the Ribbon","explainText":"This policy setting controls whether the Developer tab will be displayed in the Ribbon.\\n\\nIf you enable this policy setting, the Developer tab will be displayed in the Ribbon.\\n\\nIf you disable this policy setting, the Developer tab will not be displayed in the Ribbon.\\n\\nIf you do not configure this policy setting, the Developer tab will not be displayed in the Ribbon, but its visibility can be changed via a setting in the application Options dialog box.","tags":["L_OptionsCustomizeRibbon","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"developertools"},{"parentCategory":{"ref":"L_General"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowTheNewTemplateGalleryWhenStartingPublisher","displayName":"Show the New template gallery when starting Publisher","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_General","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usestartupdlg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_TurnOffDragPreview","displayName":"Turn off drag preview","explainText":"This policy setting allows you to determine whether Publisher shows a semi-transparent drag preview or a simple outline of the object when the object is dragged.\\n\\nIf you enable this policy setting, only the outline of the object is shown while being dragged.  This is the recommended setting for older machines because of the resource requirements of this feature.\\n\\nIf you disable or do not configure this policy setting, a semi-transparent drag preview of the object is shown while being dragged.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"uselegacydrag"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":50,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetMaximumNumberOfMRUItemsToDisplaySpinID"}]},"name":"L_SetMaximumNumberOfMRUItemsToDisplay","displayName":"Number of publications in the Recent Publications list","explainText":"This policy setting specifies the number of entries displayed in the Recent Publications list that appears when users click Open on the File tab in Backstage view.  \\n\\nIf you enable this policy setting, you can specify the number of entries to be between 0 and 50. If you set the number to 0, all pinned and unpinned entries are hidden.\\n\\nIf you disable or do not configure this policy setting, a maximum of 25 items will be displayed in the Recent Publications list.\\n\\nNote: If you want to prevent items from being added to the Recent Publications list entirely, you can enable the \\"Do not keep history of recently opened documents\\" Windows policy setting.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\file mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":20,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetNumberOfPlacesInTheRecentPlacesListSpinID"}]},"name":"L_SetNumberOfPlacesInTheRecentPlacesList","displayName":"Number of folders in the Recent Folders list","explainText":"This policy setting specifies the number of unpinned entries displayed in the Recent Folders list that appears when users click Open or Save As on the File tab in Backstage view.\\n\\nIf you enable this policy setting, you can specify the number of unpinned entries to be between 0 and 20. If you set the number to 0, all pinned and unpinned entries are hidden.\\n\\nIf you disable or do not configure this policy setting, a maximum of 5 unpinned items are displayed in the Recent Folders list.\\n\\nNote: If you want to prevent items from being added to the Recent Folders list entirely, you can enable the \\"Do not keep history of recently opened documents\\" Windows policy setting.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\place mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseXPSEnhancedPrintPath","displayName":"Use XPS-enhanced print path","explainText":"This policy setting allows you to use XPS-enhanced print path when available. \\n\\nIf you enable or do not configure this policy setting, the XPS print path will be used.\\n\\nIf you disable this policy setting, the XPS print path is not used.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"enablexpsprintpathprinting"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallysubstitutefontformissingEAchars","displayName":"Automatically substitute font for missing East Asian characters","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usefontlinking"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"1"},"displayName":"Left-to-Right"},{"value":{"string":"256"},"displayName":"Right-to-Left"}],"valueName":"defaulttextflow","inputType":"dropdownList","id":"L_SetDefaultTextFlowDirectionDropID"}]},"name":"L_SetDefaultTextFlowDirection","displayName":"Set default text flow direction","explainText":"This policy setting allows you to set the default text flow between Right-to-Left (RTL) and Left-to-Right (LTR). \\n\\nIf you enable this policy setting, you may choose whether text will flow RTL or LTR.\\n\\nIf you disable or not configure this policy setting, the default text flow setting is used.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallySwitchKeyboard","displayName":"Automatically switch keyboard to match the language of surrounding text","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autokeybd"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AllowTextToBeDraggedAndDropped","displayName":"Allow text to be dragged and dropped","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"textdragndrop"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenselectingautomaticallyselectentireword","displayName":"When selecting, automatically select entire word","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordsel"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenformattingautomaticallyformatentireword","displayName":"When formatting, automatically format entire word","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordformat"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseChinesefontsizes","displayName":"Use Chinese font sizes","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prcfontsizes"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallyHyphenateInNewTextBoxes","displayName":"Automatically hyphenate in new text boxes","explainText":"Checks/Unchecks the option \'\'Automatically hyphenate in new text boxes\'\'.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"defautohyph"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowScreenTipsonobjects","displayName":"Show ScreenTips on objects","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showobjecttooltips"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Enableincrementalpublishtoweb","displayName":"Enable incremental publish to Web","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"incrementalupload"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Sendentirepublicationasasingle","displayName":"Send entire publication as a single JPEG image","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"emailasimg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptuserwhenreapplyingastyle","displayName":"Prompt user when reapplying a style","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prompttoupdatestyle"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"autorecoversaveinterval","required":true,"requiredSpecified":true,"expandable":false,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Minutes (range 1-120):","id":"L_SaveAutoRecoverinfoeveryID"}]},"name":"L_SaveAutoRecoverinfoevery","displayName":"Save AutoRecover info every (minutes)","explainText":"This policy setting allows you to specify the Save Autorecover interval in minutes.\\n\\nIf you enable this policy setting, you may specify the Save Autorecover interval in minutes (valid range: 1-120).\\n\\nIf you disable or do not configure this policy setting, the interval specified in the UI will be used.\\n","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Allowbackgroundsaves","displayName":"Allow background saves","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"backgroundsave"},{"parentCategory":{"ref":"L_Proofing"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":1}},"displayName":"Check spelling as you type"},{"value":{"decimal":{"value":2}},"displayName":"Hide spelling errors"},{"value":{"decimal":{"value":3}},"displayName":"Both"}],"valueName":"publisherspellingoptions","inputType":"dropdownList","id":"L_CheckspellingasyoutypeDropID"}]},"name":"L_Checkspellingasyoutype","displayName":"Check spelling as you type","explainText":"This policy setting allows you to configure options for spelling errors.\\n\\nIf you enable this policy setting, you may choose one of these options:\\n-  Check spelling as you type: This option is checked.\\n-  Hide spelling errors: This option is checked, but \\"Check spelling as you type\\" is unchecked.\\n- Both: \\"Check spelling as you type\\" and \\"Hide spelling errors\\" are both checked.\\n\\nIf you disable or do not configure this policy setting, the \\"Check spelling as you type\\" option is checked.","tags":["L_Proofing","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\shared tools\\\\proofing tools\\\\1.0\\\\office"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptusertosetupprinter","displayName":"Prompt user to setup printer","explainText":"When set, Publisher will show a prompt to the user to start the Printer Setup Wizard when a new printer is found.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showprintersetup"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"0"},"displayName":"Left to right"},{"value":{"string":"1"},"displayName":"Right to left"}],"valueName":"defaultrtl","inputType":"dropdownList","caption":"Default Publisher direction","id":"L_defaultpublisherdirection3"}]},"name":"L_DefaultPublisherdirection","displayName":"Default Publisher direction","explainText":"Specifies the default layout orientation.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseSequenceChecking","displayName":"Use sequence checking","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"seqcheck"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Usetypeandreplace","displayName":"Use type and replace","explainText":"Checks/Unchecks the corresponding UI option.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"typereplace"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AdddoublequotesinHebrewalphabetnumbering","displayName":"Add double quotes in Hebrew alphabet numbering","explainText":"Checked: Adds double quotation marks (\'\') to Hebrew numbering. | Unchecked: Does not add double quotation marks (\'\') to Hebrew numbering.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"dubquohebalpnum"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisableOfficeStartPublisher","displayName":"Disable the Office Start screen for Publisher","explainText":"This policy setting controls whether the Office Start screen appears on boot for Publisher.\\n\\nIf you enable this policy setting, users will not see the Office Start screen when they boot Publisher.\\n\\nIf you disable or do not configure this policy setting, users will see the Office Start screen when they boot Publisher.\\n\\nNote: This policy setting is overridden by the policy setting \\"Microsoft Office 2016 > Miscellaneous > Disable the Office Start screen for all Office applications\\" if that policy setting is set.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"disableboottoofficestart"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"personaltemplates","requiredSpecified":false,"expandable":true,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Personal templates path","id":"L_PersonalTemplatesPath"}]},"name":"L_PersonalTemplatesPath","displayName":"Personal templates path for Publisher","explainText":"This policy setting specifies the location of a user\'s personal templates. \\n\\nIf you enable this policy setting, users will see any templates they have saved in the specified location in the custom templates tab on the Office Start screen and in File | New and when saving a template their default folder will change to be the specified location. \\n\\nIf you disable or do not configure this policy setting, users will not see templates they have saved in the custom templates tab on the Office Start screen and in File | New and when saving a template their default folder will be their document save location.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":0}},"displayName":"Featured"},{"value":{"decimal":{"value":2}},"displayName":"Built-in"},{"value":{"decimal":{"value":1}},"displayName":"Custom"}],"valueName":"officestartdefaulttab","inputType":"dropdownList","caption":"Default tab","id":"L_DefaultBuiltInTab"}]},"name":"L_DefaultBuiltInTab","displayName":"Default tab to show in Publisher on the Office Start screen and in File | New","explainText":"This policy setting controls what displays as the default tab in Publisher on the Office Start screen and in File | New. \\n\\nIf you enable this policy setting, you can choose one of two options to become the default tab on the Office Start screen and in File | New:\\n\\n* Built-in – Users will the see built-in templates tab as the default tab in Publisher on the Office Start screen and in File | New.\\n\\n* Custom – Users will the see custom templates tab as the default tab in Publisher on the Office Start screen and in File | New when templates exist (this can include Custom XML programmed templates, templates in the Workgroup templates path, templates in the Personal templates path, or SharePoint templates).\\n\\nIf you disable or do not configure this policy setting, users will see the Featured templates tab as the default tab in Publisher on the Office Start screen and in File | New","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"}]}')
    }
}]);
