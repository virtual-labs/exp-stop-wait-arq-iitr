### **General Instructions:**

1. The aim is to introduce the students to the working of the Stop and Wait ARQ and how it behaves under the situations such as Frame Lost or Acknowledgement lost.  
2. Once redirected to the simulation page click on the instructions button prompted on the right side of the page.  
3. Since Stop and Wait ARQ does not follow sliding window protocol, **ONLY ONE frame** should be selected at a time to move ahead with the simulation.  
4. The user needs to make the right selections in the array (labeled as Frames) for the simulation to run further and for better understanding, we have taken the running serial number to represent the frames otherwise it works on sequence numbers i.e., 0,1,0,1.....  
5. If the user fails to select the correct frame at any point of simulation, the **“Wrong Frame Selected”** is alerted on the screen and until the user successfully selects the correct frame, the simulation does not proceed and the user is given as many retries as needed.  
6. An index is provided to the left of the screen to allow the user to understand which color signifies what behaviour.  
 
### **Steps to perform simulation:**

1. Firstly, select the first frame, i.e., 1 to be sent to the receiver and now wait to receive the acknowledgment of the 1st frame.  
2. After ACK 1 received, select the next frame to be sent.  
3. ACK 2 not received because the acknowledgment is lost, retransmits the frame.  
4. After ACK 2 received, select the next frame to be sent.  
5. After ACK 3 received, select the next frame to be sent.  
6. Frame 4 got lost, retransmit the frame.  
7. After ACK 4 received, select the next frame to be sent.  
8. ACK 5 received, **ALL FRAMES SENT!**  
9. Input the correct total number of frames transmitted and click the **Submit** button.  
