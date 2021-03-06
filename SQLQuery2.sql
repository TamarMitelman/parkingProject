USE [master]
GO
/****** Object:  Database [Parking]    Script Date: 04/08/2019 20:30:50 ******/
--CREATE DATABASE [Parking] ON  PRIMARY 
--( NAME = N'Parking', FILENAME = N'D:\SQL-DATA\Parking.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
-- LOG ON 
--( NAME = N'Parking_log', FILENAME = N'D:\SQL-DATA\Parking_log.ldf' , SIZE = 4224KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
--GO
ALTER DATABASE [Parking] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Parking].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Parking] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Parking] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Parking] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Parking] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Parking] SET ARITHABORT OFF 
GO
ALTER DATABASE [Parking] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Parking] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Parking] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Parking] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Parking] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Parking] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Parking] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Parking] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Parking] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Parking] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Parking] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Parking] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Parking] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Parking] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Parking] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Parking] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Parking] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Parking] SET RECOVERY FULL 
GO
ALTER DATABASE [Parking] SET  MULTI_USER 
GO
ALTER DATABASE [Parking] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Parking] SET DB_CHAINING OFF 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Parking', N'ON'
GO
USE [Parking]
GO
/***************************************************************************************
/****** Object:  User [students\hitmachut]    Script Date: 04/08/2019 20:30:50 ******/
CREATE USER [students\hitmachut] FOR LOGIN [STUDENTS\hitmachut] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [students\hitmachut]
GO
********************************************************************************/
/****** Object:  Table [dbo].[Car]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car](
	[id_car] [int] IDENTITY(1,1) NOT NULL,
	[car_number] [nvarchar](50) NOT NULL,
	[user_id] [int] NULL,
 CONSTRAINT [PK_Car] PRIMARY KEY CLUSTERED 
(
	[id_car] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Car_in_parking]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car_in_parking](
	[c_id] [int] IDENTITY(1,1) NOT NULL,
	[c_car_id] [int] NOT NULL,
	[c_parkingId] [int] NOT NULL,
	[c_date_start] [datetime] NOT NULL,
	[c_date_end] [datetime] NULL,
 CONSTRAINT [PK_Car_in_parking] PRIMARY KEY CLUSTERED 
(
	[c_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Criterion]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Criterion](
	[c_id] [int] IDENTITY(1,1) NOT NULL,
	[c_value] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Criterion] PRIMARY KEY CLUSTERED 
(
	[c_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parking_owner]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parking_owner](
	[o_id] [int] IDENTITY(1,1) NOT NULL,
	[o_name] [nvarchar](50) NOT NULL,
	[o_password] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_Parking_owner] PRIMARY KEY CLUSTERED 
(
	[o_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parkings]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parkings](
	[p_Id] [int] IDENTITY(1,1) NOT NULL,
	[p_Name] [nvarchar](50) NOT NULL,
	[p_Addess] [nvarchar](70) NOT NULL,
	[p_Long] [decimal](18, 15) NOT NULL,
	[p_Lat] [decimal](18, 15) NOT NULL,
	[p_ParkingsNum] [int] NOT NULL,
	[p_EmptyParkings] [int] NOT NULL,
	[p_For_few_days] [bit] NULL,
	[p_Description] [nvarchar](1000) NULL,
	[p_PricesHour] [int] NOT NULL,
	[p_API_Details] [nvarchar](100) NULL,
	[p_BankDetails] [nvarchar](100) NULL,
	[p_ActivityHoursTill] [time](2) NOT NULL,
	[p_ActivityHoursEnd] [time](2) NOT NULL,
	[p_image] [nvarchar](50) NULL,
 CONSTRAINT [PK_Parkings] PRIMARY KEY CLUSTERED 
(
	[p_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parkings_of_owner]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parkings_of_owner](
	[op_id] [int] IDENTITY(1,1) NOT NULL,
	[op_parking_id] [int] NOT NULL,
	[op_owner_id] [int] NULL,
 CONSTRAINT [PK_Owner_for_Parkings] PRIMARY KEY CLUSTERED 
(
	[op_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Setting_user]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Setting_user](
	[s_user_id] [int] NOT NULL,
	[s_choose_criterion] [int] NULL,
	[s_range] [int] NULL,
 CONSTRAINT [PK_Setting_user] PRIMARY KEY CLUSTERED 
(
	[s_user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 04/08/2019 20:30:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[u_id] [int] IDENTITY(1,1) NOT NULL,
	[u_phone] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[u_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Car] ON 
GO
INSERT [dbo].[Car] ([id_car], [car_number], [user_id]) VALUES (1, N'232323', 1)
GO
INSERT [dbo].[Car] ([id_car], [car_number], [user_id]) VALUES (2, N'454545', 1)
GO
INSERT [dbo].[Car] ([id_car], [car_number], [user_id]) VALUES (3, N'521651', 2)
GO
INSERT [dbo].[Car] ([id_car], [car_number], [user_id]) VALUES (4, N'936542', 1)
GO
SET IDENTITY_INSERT [dbo].[Car] OFF
GO
SET IDENTITY_INSERT [dbo].[Car_in_parking] ON 
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (41, 4, 1, CAST(N'2019-07-29T08:43:43.280' AS DateTime), CAST(N'2019-07-29T08:43:43.280' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (42, 1, 2, CAST(N'2019-07-29T08:59:09.763' AS DateTime), CAST(N'2019-11-30T09:57:09.763' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (43, 2, 2, CAST(N'2019-07-29T10:01:53.923' AS DateTime), CAST(N'2019-12-30T11:01:53.923' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (44, 4, 2, CAST(N'2019-07-29T10:59:46.980' AS DateTime), CAST(N'2019-07-29T10:59:46.980' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (45, 2, 1, CAST(N'2019-07-29T13:15:57.980' AS DateTime), CAST(N'2019-07-29T13:15:57.980' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (46, 2, 1, CAST(N'2019-07-29T13:34:28.443' AS DateTime), CAST(N'2019-07-29T13:34:28.443' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (47, 4, 1, CAST(N'2019-07-29T14:43:09.280' AS DateTime), CAST(N'2019-07-29T14:43:09.280' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (48, 1, 2, CAST(N'2019-07-30T08:26:37.763' AS DateTime), CAST(N'2019-07-30T08:26:37.763' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (49, 4, 2, CAST(N'2019-07-30T08:48:05.880' AS DateTime), CAST(N'2019-07-30T08:48:05.880' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (50, 4, 2, CAST(N'2019-07-30T10:12:50.407' AS DateTime), CAST(N'2019-07-30T10:12:50.407' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (51, 1, 1, CAST(N'2019-08-04T11:42:06.480' AS DateTime), CAST(N'2019-08-04T11:42:06.480' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (52, 1, 1, CAST(N'2019-08-04T12:55:19.943' AS DateTime), CAST(N'2019-08-04T12:55:19.943' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (53, 2, 2, CAST(N'2019-09-04T14:13:54.440' AS DateTime), CAST(N'2019-08-04T13:15:54.440' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (54, 1, 2, CAST(N'2019-10-05T13:55:34.640' AS DateTime), CAST(N'2019-08-04T13:55:34.640' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (55, 2, 1, CAST(N'2019-08-04T13:57:45.107' AS DateTime), CAST(N'2019-08-04T12:57:45.107' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (56, 1, 1, CAST(N'2019-12-04T16:37:51.640' AS DateTime), CAST(N'2019-08-04T14:37:51.640' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (57, 1, 2, CAST(N'2019-09-05T17:10:02.470' AS DateTime), CAST(N'2019-08-04T17:10:02.470' AS DateTime))
GO
INSERT [dbo].[Car_in_parking] ([c_id], [c_car_id], [c_parkingId], [c_date_start], [c_date_end]) VALUES (58, 1, 2, CAST(N'2019-08-04T17:10:34.110' AS DateTime), CAST(N'2019-08-04T17:10:34.110' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Car_in_parking] OFF
GO
SET IDENTITY_INSERT [dbo].[Criterion] ON 
GO
INSERT [dbo].[Criterion] ([c_id], [c_value]) VALUES (1, N'price     ')
GO
INSERT [dbo].[Criterion] ([c_id], [c_value]) VALUES (2, N'distance  ')
GO
INSERT [dbo].[Criterion] ([c_id], [c_value]) VALUES (3, N'full      ')
GO
SET IDENTITY_INSERT [dbo].[Criterion] OFF
GO
SET IDENTITY_INSERT [dbo].[Parkings] ON 
GO
INSERT [dbo].[Parkings] ([p_Id], [p_Name], [p_Addess], [p_Long], [p_Lat], [p_ParkingsNum], [p_EmptyParkings], [p_For_few_days], [p_Description], [p_PricesHour], [p_API_Details], [p_BankDetails], [p_ActivityHoursTill], [p_ActivityHoursEnd], [p_image]) VALUES (1, N'רננים', N'לוריא 8, תל אביב יפו, ישראל', CAST(34.771829000000025 AS Decimal(18, 15)), CAST(32.077539500000000 AS Decimal(18, 15)), 222, 3, 1, N'גדדכ', 12, N'1', N'1', CAST(N'01:00:00' AS Time), CAST(N'03:00:00' AS Time), N'parking1.png')
GO
INSERT [dbo].[Parkings] ([p_Id], [p_Name], [p_Addess], [p_Long], [p_Lat], [p_ParkingsNum], [p_EmptyParkings], [p_For_few_days], [p_Description], [p_PricesHour], [p_API_Details], [p_BankDetails], [p_ActivityHoursTill], [p_ActivityHoursEnd], [p_image]) VALUES (2, N'גינדי', N'לוריא 56, תל אביב יפו, ישראל', CAST(34.772170800000026 AS Decimal(18, 15)), CAST(32.077896000000000 AS Decimal(18, 15)), 350, 0, 0, N'גדדכ', 8, N'1', N'1', CAST(N'01:00:00' AS Time), CAST(N'03:00:00' AS Time), N'parking2.png')
GO
SET IDENTITY_INSERT [dbo].[Parkings] OFF
GO
SET IDENTITY_INSERT [dbo].[user] ON 
GO
INSERT [dbo].[user] ([u_id], [u_phone]) VALUES (1, N'0533169399')
GO
INSERT [dbo].[user] ([u_id], [u_phone]) VALUES (2, N'0527643399')
GO
INSERT [dbo].[user] ([u_id], [u_phone]) VALUES (3, N'0527199724')
GO
INSERT [dbo].[user] ([u_id], [u_phone]) VALUES (4, N'0533154253')
GO
INSERT [dbo].[user] ([u_id], [u_phone]) VALUES (5, N'0584563251')
GO
SET IDENTITY_INSERT [dbo].[user] OFF
GO
ALTER TABLE [dbo].[Car]  WITH CHECK ADD  CONSTRAINT [FK_Car_user] FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([u_id])
GO
ALTER TABLE [dbo].[Car] CHECK CONSTRAINT [FK_Car_user]
GO
ALTER TABLE [dbo].[Car_in_parking]  WITH CHECK ADD  CONSTRAINT [FK_Car_in_parking_Car] FOREIGN KEY([c_car_id])
REFERENCES [dbo].[Car] ([id_car])
GO
ALTER TABLE [dbo].[Car_in_parking] CHECK CONSTRAINT [FK_Car_in_parking_Car]
GO
ALTER TABLE [dbo].[Car_in_parking]  WITH CHECK ADD  CONSTRAINT [FK_Car_in_parking_Parkings] FOREIGN KEY([c_parkingId])
REFERENCES [dbo].[Parkings] ([p_Id])
GO
ALTER TABLE [dbo].[Car_in_parking] CHECK CONSTRAINT [FK_Car_in_parking_Parkings]
GO
ALTER TABLE [dbo].[Parkings_of_owner]  WITH CHECK ADD  CONSTRAINT [FK_Parkings_of_owner_Parking_owner] FOREIGN KEY([op_owner_id])
REFERENCES [dbo].[Parking_owner] ([o_id])
GO
ALTER TABLE [dbo].[Parkings_of_owner] CHECK CONSTRAINT [FK_Parkings_of_owner_Parking_owner]
GO
ALTER TABLE [dbo].[Parkings_of_owner]  WITH CHECK ADD  CONSTRAINT [FK_Parkings_of_owner_Parkings] FOREIGN KEY([op_parking_id])
REFERENCES [dbo].[Parkings] ([p_Id])
GO
ALTER TABLE [dbo].[Parkings_of_owner] CHECK CONSTRAINT [FK_Parkings_of_owner_Parkings]
GO
ALTER TABLE [dbo].[Setting_user]  WITH CHECK ADD  CONSTRAINT [FK_Setting_user_Criterion] FOREIGN KEY([s_choose_criterion])
REFERENCES [dbo].[Criterion] ([c_id])
GO
ALTER TABLE [dbo].[Setting_user] CHECK CONSTRAINT [FK_Setting_user_Criterion]
GO
ALTER TABLE [dbo].[Setting_user]  WITH CHECK ADD  CONSTRAINT [FK_Setting_user_user] FOREIGN KEY([s_user_id])
REFERENCES [dbo].[user] ([u_id])
GO
ALTER TABLE [dbo].[Setting_user] CHECK CONSTRAINT [FK_Setting_user_user]
GO
USE [master]
GO
ALTER DATABASE [Parking] SET  READ_WRITE 
GO