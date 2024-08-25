const actionBtns = [
  {
    label: "View More",
    action: (rowIdx) => {
      `setShowTripDetailsModal(true);
      setCurrentTripDetails(fetchedTableData[rowIdx])`
    }
  },
  {
    label: "Reassign Trip",
    action: (rowIdx) => {
      `let tripDetails = fetchedTableData[rowIdx];
      setReassignTripModalState({ data: tripDetails, open: true });`
    },
    renderCondition: () => `activeTab !== "cancelled"`
  },
  {
    label: "View Documents",
    action: (rowIdx) => {
      `let tripDetails = fetchedTableData[rowIdx];
      if (tripDetails.tripNumber) {
        setTripDocumentModalState({
          show: true,
          data: tripDetails,
          modalConfig: {
            hasActions: true,
            titlePath: "tripNumber",
            viewDocumentUrl: "data.url",
            getData: (data) => generateTripDocuments(data)
          }
        })
      }`
    }
  },
  {
    label: "Download Waybill",
    action: (rowIdx) => {
      `let tripDetails = fetchedTableData[rowIdx];
      downloadWaybill(tripDetails.id, tripDetails.waybillNumber);`
    }
  },
  {
    label: "Update Trip Status",
    action: (rowIdx) => {
      "action"
    },
    renderCondition: () => "condition without" 
  },
  {
    label: "Assign resources",
    action: (rowIdx) => {
      `setAssignJobModal({
        open: true,
        data: fetchedTableData[rowIdx]
      })`
    },
    renderCondition: (rowIdx) => rowIdx
  }
];


const actionBtnsWithData = actionBtns.map(btn => {
  if (btn.renderCondition && btn.renderCondition.length > 0) {
    
  }

  return {
    ...btn,
    action: () => {
      btn.action(`selectedRowIdx`)
      setAnchorEl(null)
    },
    renderCondition: () => {
      if (btn.renderCondition && btn.renderCondition.length > 0) {
        return btn.renderCondition(`selectedRowIndexi`)
      } else {
        return btn.renderCondition()
      }
    }
  }
});