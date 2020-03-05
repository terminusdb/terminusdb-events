view = View.graph();
view.node("Start_Label", "End_Label").hidden(true)
view.node("End").icon({color: [255,0,0], unicode: "\uf84a"})
    .text("v:End_Label").size(25).charge(-10)
view.node("Start").icon({color: [255,0,0], unicode: "\uf84a"})
    .text("v:Start_Label").size(25).collisionRadius(10)
view.edge("Start", "End").weight(100)
