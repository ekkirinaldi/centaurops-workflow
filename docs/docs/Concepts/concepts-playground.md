---
title: Playground
slug: /concepts-playground
---

import Icon from "@site/src/components/icon";

The **Playground** is a dynamic interface designed for real-time interaction with LLMs, allowing users to chat, access memories, and monitor inputs and outputs. Here, users can directly prototype their models, making adjustments and observing different outcomes.

As long as you have an [Input or Output](/components-io) component working, you can open it by clicking the **Playground** button.
The Playground's window arrangement changes depending on what components are being used.

![](/img/playground.png)

## View playground messages by session ID

When you send a message from the **Playground** interface, the interactions are stored in the **Message Logs** by `session_id`.
A single flow can have multiple chats, and different flows can share the same chat. Each chat will have a different `session_id`.

To view messages by `session_id` within the Playground, click the <Icon name="Ellipsis" aria-label="Horizontal ellipsis" /> menu of any chat session, and then select **Message Logs**.

![](/img/messages-logs.png)

Individual messages in chat memory can be edited or deleted. Modifying these memories influences the behavior of the chatbot responses.

To learn more about chat memories in CentaurOps, see [Memory components](/components-memories).

## Use custom Session IDs for multiple user interactions

`session_id` values are used to track user interactions in a flow.
By default, if the `session_id` value is empty, it is set to the same value as the `flow_id`. In this case, every chat call uses the same `session_id`, and you effectively have one chat session.

The `session_id` value can be configured in the **Advanced Settings** of the **Chat Input** and **Chat Output** components.

To have more than one session in a single flow, pass a specific Session ID to a flow with the `session_id` parameter in the URL. All the components in the flow will automatically use this `session_id` value.

To post a message to a flow with a specific Session ID with curl, enter the following command:

```bash
   curl -X POST "http://127.0.0.1:7860/api/v1/run/$FLOW_ID" \
   -H 'Content-Type: application/json' \
   -d '{
       "session_id": "custom_session_123",
       "input_value": "message",
       "input_type": "chat",
       "output_type": "chat"
   }'
```

Check your flow's **Playground**. In addition to the messages stored for the Default Session, a new session is started with your custom Session ID.

## Work with images in the Playground

The Playground supports handling images in base64 format, allowing you to work with image data directly in your flows.

The Playground accepts the following image formats:

* PNG
* JPG/JPEG
* GIF
* BMP
* WebP

You can work with base64 images in the Playground in several ways:

* **Direct Upload**: Use the image upload button in the chat interface to upload images directly.
* **Drag and Drop**: Drag and drop image files into the chat interface.
* **Programmatic Input**: Send base64-encoded images through the API.

This example sends a base64-encoded image to the Playground using curl:

```bash
curl -X POST "http://127.0.0.1:7860/api/v1/run/$FLOW_ID" \
-H 'Content-Type: application/json' \
-d '{
    "session_id": "custom_session_123",
    "input_value": "What is in this image?",
    "input_type": "chat",
    "output_type": "chat",
    "files": ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."]
}'
```

The image is displayed in the chat interface and can be processed by your flow components.

