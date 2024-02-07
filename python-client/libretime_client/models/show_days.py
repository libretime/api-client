# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import date
from typing import Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr, constr
from libretime_client.models.record_enabled_enum import RecordEnabledEnum
from libretime_client.models.repeat_kind_enum import RepeatKindEnum
from libretime_client.models.week_day_enum import WeekDayEnum

class ShowDays(BaseModel):
    """
    ShowDays
    """
    id: StrictInt = Field(...)
    first_show_on: date = Field(...)
    last_show_on: Optional[date] = None
    start_time: StrictStr = Field(...)
    timezone: constr(strict=True, max_length=1024) = Field(...)
    duration: constr(strict=True, max_length=1024) = Field(...)
    record_enabled: Optional[RecordEnabledEnum] = None
    week_day: Optional[WeekDayEnum] = None
    repeat_kind: RepeatKindEnum = Field(...)
    repeat_next_on: Optional[date] = None
    show: StrictInt = Field(...)
    __properties = ["id", "first_show_on", "last_show_on", "start_time", "timezone", "duration", "record_enabled", "week_day", "repeat_kind", "repeat_next_on", "show"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> ShowDays:
        """Create an instance of ShowDays from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if last_show_on (nullable) is None
        # and __fields_set__ contains the field
        if self.last_show_on is None and "last_show_on" in self.__fields_set__:
            _dict['last_show_on'] = None

        # set to None if record_enabled (nullable) is None
        # and __fields_set__ contains the field
        if self.record_enabled is None and "record_enabled" in self.__fields_set__:
            _dict['record_enabled'] = None

        # set to None if week_day (nullable) is None
        # and __fields_set__ contains the field
        if self.week_day is None and "week_day" in self.__fields_set__:
            _dict['week_day'] = None

        # set to None if repeat_next_on (nullable) is None
        # and __fields_set__ contains the field
        if self.repeat_next_on is None and "repeat_next_on" in self.__fields_set__:
            _dict['repeat_next_on'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ShowDays:
        """Create an instance of ShowDays from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ShowDays.parse_obj(obj)

        _obj = ShowDays.parse_obj({
            "id": obj.get("id"),
            "first_show_on": obj.get("first_show_on"),
            "last_show_on": obj.get("last_show_on"),
            "start_time": obj.get("start_time"),
            "timezone": obj.get("timezone"),
            "duration": obj.get("duration"),
            "record_enabled": obj.get("record_enabled"),
            "week_day": obj.get("week_day"),
            "repeat_kind": obj.get("repeat_kind"),
            "repeat_next_on": obj.get("repeat_next_on"),
            "show": obj.get("show")
        })
        return _obj

