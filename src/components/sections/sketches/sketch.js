import * as ml5 from "ml5";
export default function sketch(p){
    let video;
    let poseNet,pose,skeleton;
    let brain;
    // let state = 'waiting';
    // let targetLabel;
    const modelInfo = {
        model:'model.json',
        metadata : 'model_meta.json',
        weights: 'model.weights.bin'
    }
    let poseLabel = 'L';
    // let helmet;
    let props;
    // p.keyPressed = ()=>{
        // if(p.key =='s'){
        //     brain.saveData();
        // }
        // else{
        //     targetLabel = p.key;
        //     console.log(targetLabel);
        //     setTimeout(()=>{
        //         console.log('collecting');
        //         state = 'collecting';
        //         setTimeout(()=>{
        //             console.log('not collecting');
        //             state = 'waiting';
        //         },10000)
        //     },10000);           
        // }   
    // }
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
       props = newProps;
      }
    p.setup = ()=>{
        // helmet = p.loadImage('check.png');
        p.createCanvas(640,480);
        video = p.createCapture(p.VIDEO);
        video.hide();
        poseNet = ml5.poseNet(video,()=>{
            console.log("ready");
        })
        poseNet.on('pose',(poses)=>{
            if(poses.length>0){pose = poses[0].pose;
            skeleton = poses[0].skeleton;
            // if(state == 'collecting'){
            //     let inputs = [];
            //     for(let i=0;i<pose.keypoints.length;i++){
            //         let x = pose.keypoints[i].position.x;
            //         let y = pose.keypoints[i].position.y;
            //         inputs.push(x);
            //         inputs.push(y);
            //     }
            //     let target = [targetLabel]
            //     brain.addData(inputs,target)
            // }
            
        }
        })
        let options = {
            inputs : 34,
            outputs : 4,
            task : 'classification',
            debug : true
        }
        brain = ml5.neuralNetwork(options);
        // brain.loadData("trainData.json",()=>{
        //     brain.normalizeData();
        //     brain.train({epochs:100},()=>{
        //         console.log('model trained');
        //         brain.save();
        //     })
        // })
        brain.load(modelInfo,()=>{
            console.log("model ready"); 
            classifyPose();
        })
    }
    function classifyPose(){
        if(pose){
            let inputs = []
            for(let i = 0; i<pose.keypoints.length;i++){
                let x = pose.keypoints[i].position.x;
                let y = pose.keypoints[i].position.y;
                inputs.push(x);
                inputs.push(y);
            }
            brain.classify(inputs,(err,res)=>{
                // console.log(res[0].label);
                poseLabel = res[0].label;
                // console.log(res);
                props.onLabelChange(poseLabel);
                classifyPose();
            })
        }
        else{
            setTimeout(classifyPose,100);
        }
    }
    p.draw = ()=>{
        p.translate(video.width,0);
        p.scale(-1,1);
        p.image(video,0,0);
        if(pose){
            let eyeR = pose.rightEye;
            let eyeL = pose.leftEye;
            let d = p.dist(eyeR.x,eyeR.y,eyeL.x,eyeL.y);

            let nose = pose.nose;
            
            for(let i=0;i<pose.keypoints.length;i++){
                let x = pose.keypoints[i].position.x;
                let y = pose.keypoints[i].position.y;
                // p.fill(0,255,0);
                // p.ellipse(x,y,16,16);
            }
            for(let i=0;i<skeleton.length;i++){
                let a =skeleton[i][0];
                let b =skeleton[i][1];
                // p.line(a.position.x,a.position.y,b.position.x,b.position.y);
            }
        }
        // p.pop();
        // p.image(helmet, 250 , 50 , helmet.width/6 ,helmet.height/6);
        // p.fill(255,0,255);
        // p.noStroke();
        // p.textSize(128);
        // p.textAlign(p.CENTER,p.CENTER);
        // p.text(poseLabel.toUpperCase(),p.width/2,p.height/2);
    }
}