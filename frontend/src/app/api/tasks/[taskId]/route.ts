import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(
  _req: Request,
  { params }: { params: { taskId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const task = await prisma.task.findUnique({
    where: {
      id: params.taskId,
      userId: session.user.id,
    },
  });

  if (!task) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(task);
}

export async function PATCH(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const json = await req.json();
  const { title, description, priority, status } = json;

  const task = await prisma.task.update({
    where: {
      id: params.taskId,
      userId: session.user.id,
    },
    data: {
      title,
      description,
      priority,
      status,
    },
  });

  return NextResponse.json(task);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { taskId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await prisma.task.delete({
    where: {
      id: params.taskId,
      userId: session.user.id,
    },
  });

  return new NextResponse(null, { status: 204 });
}